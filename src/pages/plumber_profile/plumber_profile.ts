import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, App, ToastController, Tabs } from 'ionic-angular';
import { APIURL } from '../../app/apiconfig';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import{ Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-plumber_profile',
  templateUrl: 'plumber_profile.html'
})
export class Plumber_profilePage {
 	about_tab: string = "about";
 	details: any = {}
 	apiurl: string = APIURL;
 	ratings: any = {}
 	user: any = {}
 	showLoader: boolean = false;
 	submitAttempt: boolean = false;	
 	orderForm: FormGroup;
 	uploadedFiles: any = [];
	
	constructor(public navCtrl: NavController, private app: App, public toastController: ToastController, public formBuilder: FormBuilder, private camera: Camera, public actionsheet: ActionSheetController, private http: HttpClient, public storage: Storage, private navparams: NavParams) {

	}

	ngOnInit() {
		this.buildForm();
	}

	ionViewDidLoad(){
		this.storage.get('cuserinfo').then(result => {
			this.user = JSON.parse(result);
			this.details = JSON.parse(this.navparams.get('obj'));
			this.showLoader = true;
			this.http.get(APIURL+'reviews/ratings?id='+this.details.id+'&access-token='+this.user.token)
			.subscribe({
		        next: response => {
		        	this.showLoader = false;
		        	this.ratings = response;
		        },
		        error: err => {
		        	this.showLoader = false;
		          	console.error(err);
		        }
		    });
		});
	}

	buildForm(){
		this.orderForm = this.formBuilder.group({
			requirement: ['', Validators.required]
		});
	}

	dataURLtoFile(b64Data, contentType) {
        contentType = contentType || '';
        let sliceSize = 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

		var blob = new Blob(byteArrays, {type: contentType});
		let filename = Math.random().toString(36).replace(/[^a-z]+/g, '')+".jpg";
		var file = new File([blob], filename, {type: contentType});
		return file;
	}

	openImageSelector(){
		let actionSheet = this.actionsheet.create({
	     title: 'Select Images Eg; Doctor Prescription',
	     buttons: [
	       {
	         text: 'Browse Photo Albums',
	         role: 'destructive',
	         handler: () => {
	           this.uploadedFiles = [];
	           document.getElementById('requirement_images').querySelector('input').click();
	         }
	       },
	       {
	         text: 'Open Camera',
	         role: 'destructive',
	         handler: () => {
	         	//this.uploadedFiles = [];
	            const options: CameraOptions = {
				  quality: 100,
				  destinationType: this.camera.DestinationType.DATA_URL,
				  encodingType: this.camera.EncodingType.JPEG,
				  mediaType: this.camera.MediaType.PICTURE,
				  correctOrientation: true,
				  cameraDirection: 1
				}

				this.camera.getPicture(options).then((imageData) => {
					let base64Image = 'data:image/jpg;base64,'+imageData;
					var imgtag = document.createElement("img");
					imgtag.src = base64Image;
					document.querySelector('.uploaded_images').appendChild(imgtag);
					this.uploadedFiles.push(base64Image);
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

	renderImages() {
	  	var f = document.getElementById('requirement_images').querySelector('input').files;
	  	document.querySelector('.uploaded_images').innerHTML = '';
	  	function importFile(i, that){
			var reader = new FileReader();
			var imgtag = document.createElement("img");
			reader.onloadend = function(event) {
				imgtag.src = <any>reader.result;
				document.querySelector('.uploaded_images').appendChild(imgtag);
				if(i < f.length - 1){
					importFile(++i, that);
				}
			};
			that.uploadedFiles.push(f[i]);
			reader.readAsDataURL(f[i]);
		}
		var that = this;
		importFile(0, that);
	}

 	request_quote(){
 		this.submitAttempt = true;
 		if(!this.orderForm.valid){
 			return false;
 		}

 		console.log(this.uploadedFiles)

 		let formData = new FormData();
 		for (var i = 0; i < this.uploadedFiles.length; i++) {
 			console.log(this.uploadedFiles[i].length)
	    	formData.append('file[]', this.uploadedFiles[i]);
	    }
 		formData.append('requirement', this.orderForm.value['requirement']);
 		formData.append('subcat_id', this.navparams.get('subcat_id'));
 		formData.append('customer_id', this.user.id);
 		formData.append('sp_id', this.details.id);

	    this.showLoader = true;
	    this.http.post<any>(APIURL+'orders?access-token='+this.user.token, formData)
	    .subscribe({
	    	next: response => {
				this.showLoader = false;
				if(response.error){
					const toast = this.toastController.create({
				      message: response.reason,
				      duration: 5000,
				      cssClass: 'toast-danger',
				      position: 'top'
				    });
				    toast.present();
				    return false;
				} else {
					const toast = this.toastController.create({
				      message: 'Order successfully created. You will be notified once you receive quotation from service provider.',
				      duration: 5000,
				      cssClass: 'toast-success',
				      position: 'top'
				    });
				    toast.present();
				    this.orderForm.controls.requirement.setValue('');
				    document.querySelector('.uploaded_images').innerHTML = '';
				    const tabsNav = this.app.getNavByIdOrName('myTabsNav') as Tabs;
					tabsNav.select(1);
					this.navCtrl.popToRoot();
				}
			},
			error: error => {
				this.showLoader = false;
				this.submitAttempt = false;
				console.error('There was an error!', error);
			}
	    })
  	}  
}
