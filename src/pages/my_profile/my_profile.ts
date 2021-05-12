import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController, ActionSheetController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { APIURL, IMAGE_URL } from '../../app/apiconfig';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NgModel } from '@angular/forms';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

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
	@ViewChild('gender') gender: NgModel;
	@ViewChild('pincode') pincode: NgModel;
	email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	profile = {
		name: '',
		mobile: '',
		email: '',
		address: '',
		gender: '',
		pincode: {id:0,name:""}
	}
	pin:any;
	pincodes:any[]=[];
	pincodeSel:any
	constructor(private http: HttpClient, public camera: Camera, public actionsheet: ActionSheetController, public storage: Storage, public navCtrl: NavController, public toastController: ToastController) {

	}
	async ngOnInit() {
		await this.getPincodes();
	}

	ionViewDidEnter(){
		this.storage.get('cuserinfo').then(result => {
		  this.user = JSON.parse(result);
		  console.log('user infor is ', this.user);
		  this.profile.name = this.user.name;
		  this.profile.mobile  = this.user.contact;
		  this.profile.email = this.user.email;
		  this.profile.address = this.user.address;
		  this.profile_picture = IMAGE_URL+ this.user.profile_picture;
		  this.profile.gender = this.user.gender;
		  this.profile.pincode = this.user.pincode;
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
  							userinfo['profile_picture'] = IMAGE_URL + response.profile_picture;
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
  							userinfo['profile_picture'] = IMAGE_URL + response.profile_picture;
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
		console.log('this.profile',this.profile);
		if (this.name.valid && this.mobile.valid && this.email.valid && this.address.valid && this.gender.valid && this.pincode.valid) {
			let profileObj = {
				id:this.user['id'],
				name: this.profile.name,
				email: this.profile.email,
				contact: this.profile.mobile,
				address:this.profile.address,
				gender: this.profile.gender,
				pincode:String(this.profile.pincode.name)
			};
			this.showLoader = true;
			this.http.post<any>(APIURL+'customers/update-profile', profileObj)
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
					      message: 'Profile updated successfully.',
					      duration: 4000,
					      cssClass: 'toast-success',
					      position: 'top'
					    });
						this.user['address'] = this.profile.address;
						this.user['name'] = this.profile.name;
						this.user['contact'] = this.profile.mobile;
						this.user['email'] = this.profile.email;
						this.user['address'] = this.profile.address;
						this.user['gender'] = this.profile.gender;
						this.user['pincode'] = this.profile.pincode;
						this.storage.set('cuserinfo', JSON.stringify(this.user));
					    this.navCtrl.setRoot(TabsPage);
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
	pincodeChange($event){
		console.log('this.pincode',$event);
	}
	getPincodes(){
		return new Promise((res)=>{
			this.http.get<any>(APIURL+'pincodes')
			.subscribe({
				next: response => {
					if(response.error){
						const toast = this.toastController.create({
						  message: response.reason,
						  duration: 4000,
						  cssClass: 'toast-danger',
						  position: 'bottom'
						});
						toast.present();
						res(false);
					} else {
						console.log('response',response);
						this.pincodes = response;
						res(true);
					}
				},
				error: err => {
					this.showLoader = false;
					const toast = this.toastController.create({
					  message: err.message,
					  duration: 4000,
					  cssClass: 'toast-danger',
					  position: 'bottom'
					});
					toast.present();
					res(false);

				}
			})
		});
	}

}
