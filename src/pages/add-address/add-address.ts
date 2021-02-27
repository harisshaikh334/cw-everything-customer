import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, ToastController, ViewController} from 'ionic-angular';
import { APIURL } from '../../app/apiconfig';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-add-address',
  templateUrl: 'add-address.html',
})
export class AddAddressPage {

  title: string = "Modify Address";
  address_type: string = '';
  address: string = '';	
  submitAttempt: boolean = false;
  showLoader: boolean = false;
  user: any = {}
  canDelete: boolean = false;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastController: ToastController, private http: HttpClient, public storage: Storage, public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  	if(this.navParams.get('obj')){
	    let obj = this.navParams.get('obj');
	    this.address_type = obj.address_type;
	    this.address = obj.address;
	} else {
		this.title = 'Add Address';
	}

	this.storage.get('cuserinfo').then(result => {
	  this.user = JSON.parse(result);
	});

	this.canDelete = this.navParams.get('canDelete');
  }

  save(){
  	this.submitAttempt = true;
  	if(!this.address_type || !this.address){
		return false;
	}

	this.showLoader = true;

	const postdata = {address_type: this.address_type, address: this.address, customer_id: this.user.id}
	if(this.navParams.get('obj')){
		postdata['id'] = this.navParams.get('obj').id;
	}

	this.http.post<any>(APIURL+'customers/save-address?access-token='+this.user.token, postdata)
	.subscribe({
		next: response => {
			this.showLoader = false;
			if(response.error){
				const toast = this.toastController.create({
			      message: response.reason,
			      duration: 4000,
			      cssClass: 'toast-danger',
			      position: 'bottom'
			    });
			    toast.present();
			    return false;
			} else {
				const toast = this.toastController.create({
			      message: 'Address saved successfully.',
			      duration: 4000,
			      cssClass: 'toast-success',
			      position: 'bottom'
			    });
		    	toast.present();
		    	setTimeout(() => {
		    		this.viewCtrl.dismiss({reload: true});
		    	},2000)
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
		}
	})
  }

  remove(){
  	console.log(1);
  	let alert = this.alertCtrl.create({
	    title: 'Confirm Removal',
	    message: 'Are you sure you want to remove this address?',
	    buttons: [
	        {
	          text: 'Cancel',
	          role: 'cancel',
	          handler: () => {}
	        },
	        {
	          text: 'Remove',
	          handler: () => {
			  	this.showLoader = true;
				this.http.delete(APIURL+'customers/del-address?access-token='+this.user.token+'&id='+this.navParams.get('obj').id)
				.subscribe({
					next: response => {
						this.showLoader = false;
						const toast = this.toastController.create({
					      message: 'Address removed successfully.',
					      duration: 4000,
					      cssClass: 'toast-success',
					      position: 'bottom'
					    });
				    	toast.present();
				    	setTimeout(() => {
				    		this.viewCtrl.dismiss({reload: true});
				    	},2000)
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
					}
				})
			  }
			}
		]
	});
	alert.present()
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
