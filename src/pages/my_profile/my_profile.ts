import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController, ActionSheetController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../app/apiconfig';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'page-my_profile',
  templateUrl: 'my_profile.html'
})
export class My_profilePage {

	public showLoader: boolean = false;
	public user: any = {};
	public submitAttempt: boolean = false;
	public pass: string = '';
	public cpass: string = '';
	public current: string = '';
	public profile_picture: string = '';
	@ViewChild('name') name: NgModel;
	@ViewChild('mobile') mobile: NgModel;
	@ViewChild('email') email: NgModel;
	@ViewChild('address') address: NgModel;
	email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	profile = {
		name: '',
		mobile: '',
		email: '',
		address: ''
	}
	constructor(private http: HttpClient, public camera: Camera, public actionsheet: ActionSheetController, public storage: Storage, public navCtrl: NavController, public toastController: ToastController) {

	}

	ionViewDidEnter(){
		this.storage.get('cuserinfo').then(result => {
		  this.user = JSON.parse(result);
		  console.log('user infor is ', this.user);
		  this.profile.name = this.user.name;
		  this.profile.mobile  = this.user.contact;
		  this.profile.email = this.user.email;
		  this.profile.address = this.user.address;
		  this.profile_picture = this.user.profile_picture;
		});
	}

	actionSheetFile(){
		let actionSheet = this.actionsheet.create({
	     title: 'Set your display picture',
	     buttons: [
	        {
	         text: 'Browse Photo Albums',
	         role: 'destructive',
	         handler: () => {
	           const options: CameraOptions = {
				  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
				  destinationType: this.camera.DestinationType.DATA_URL,
				  correctOrientation: true
				}

				this.camera.getPicture(options).then((imageData) => {
					let base64Image = 'data:image/jpeg;base64,' + imageData
					this.profile_picture = base64Image;
					
  					var formdata: any = new FormData();
  					formdata.append('profile_picture', base64Image);
  					this.http.put<any>(APIURL+"customers/"+this.user.id+"?access-token="+this.user.token, formdata)
  					.subscribe({
  						next: response => {
  							this.storage.remove('cuserinfo');
  							const userinfo = this.user;
  							userinfo['profile_picture'] = response.profile_picture;
  							this.storage.set('cuserinfo', JSON.stringify(userinfo));
  						},
  						error: err => {
  							console.log(err)
  						}
  					})
	         	})
			  }
	        },
	        {
	         text: 'Open Camera',
	         role: 'destructive',
	         handler: () => {
	            const options: CameraOptions = {
				  quality: 100,
				  destinationType: this.camera.DestinationType.DATA_URL,
				  encodingType: this.camera.EncodingType.JPEG,
				  mediaType: this.camera.MediaType.PICTURE,
				  correctOrientation: true,
				  cameraDirection: 1
				}

				this.camera.getPicture(options).then((imageData) => {
					let base64Image = 'data:image/jpeg;base64,' + imageData
					this.profile_picture = base64Image;
					
  					var formdata: any = new FormData();
  					formdata.append('profile_picture', base64Image);
  					this.http.put<any>(APIURL+"customers/"+this.user.id+"?access-token="+this.user.token, formdata)
  					.subscribe({
  						next: response => {
  							this.storage.remove('cuserinfo');
  							const userinfo = this.user;
  							userinfo['profile_picture'] = response.profile_picture;
  							this.storage.set('cuserinfo', JSON.stringify(userinfo));
  						},
  						error: err => {
  							console.log(err)
  						}
  					})
  				})
	         }
	       },
	       {
	         text: 'Cancel',
	         role: 'cancel',
	         handler: () => {}
	       }
	     ]
	   });
	   actionSheet.present();
	}

	updateProfile() {
		if (this.name.valid && this.mobile.valid && this.email.valid && this.address.valid) {

		} else {
			alert('Please enter valid information.');
			return false;
		}
	}

	updatePass(){
		this.submitAttempt = true;
		if(!this.pass || !this.cpass || !this.current){
			return false;
		}
		
		if(this.pass.trim() !== this.cpass.trim()){
			this.showLoader = false;
			const toast = this.toastController.create({
		      message: 'Password and Confirm Password does not match.',
		      duration: 4000,
		      cssClass: 'toast-danger',
		      position: 'top'
		    });
		    toast.present();
	    	return false;
		} else if(this.pass.indexOf(' ') != -1){
			const toast = this.toastController.create({
		      message: 'Password cannot contain spaces.',
		      duration: 4000,
		      cssClass: 'toast-danger',
		      position: 'top'
		    });
		    toast.present();
	    	return false;
		} else {
			this.showLoader = true;
			this.http.post<any>(APIURL+'customers/update-password',{id: this.user['id'], secretkey: this.pass.trim(), current: this.current})
			.subscribe({
				next: response => {
					this.showLoader = false;
					if(response.error == 1){
						const toast = this.toastController.create({
					      message: response.reason,
					      duration: 4000,
					      cssClass: 'toast-danger',
					      position: 'top'
					    });
					    toast.present();
					} else {
						const toast = this.toastController.create({
					      message: 'Password updated successfully.',
					      duration: 4000,
					      cssClass: 'toast-success',
					      position: 'top'
					    });
					    toast.present();
					    this.submitAttempt = false;
					    this.pass = '';
					    this.cpass = '';
					    this.current = '';
					}
					
				},
				error: err => {
					this.showLoader = false;
					const toast = this.toastController.create({
				      message: err.message,
				      duration: 4000,
				      cssClass: 'toast-danger',
				      position: 'top'
				    });
				    toast.present();
				}
			})
		}
	}

}
