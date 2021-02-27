import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../app/apiconfig';
import { Storage } from '@ionic/storage';
import { GalleryModal } from 'ionic-gallery-modal';
import { Book_appointmentPage } from '../book_appointment/book_appointment';
import { OrderRatingPage } from '../order-rating/order-rating';

@Component({
  selector: 'page-appointment_status',
  templateUrl: 'appointment_status.html'
})
export class Appointment_statusPage {

	showLoader: boolean = true;	
	order: any = {};
	provider: any = {}
	subcat: any = {}
	user: any = {};
	checksum: string = '';
	unpaid: boolean = true;
	orderImages: any = [];
	baseurl: string = APIURL+'../../';
	paymentMode: string = '';
	paymentType: string = 'service_charge';
	status_img: string = 'assets/imgs/ic_exp_pending_req.png';
	orderid: string = '';

	firebasePlugin;

	constructor(public navCtrl: NavController, public platform: Platform, public loadingCtrl: LoadingController, public modalCtrl: ModalController, private alertCtrl: AlertController, public toast: ToastController, public storage: Storage, public navparams: NavParams, private http: HttpClient) {
		platform.ready().then(() => {
			if(platform.is('cordova')){
				//setting up notification on receive
		    	this.firebasePlugin = (<any>window).FirebasePlugin;
				this.firebasePlugin.onMessageReceived(this.onMessageReceived.bind(this));
			}
		});
	}

	onMessageReceived(message){
      if (message.tap) { 
        //do nothing
      } else {
        //received while app in foreground (show a toast)
        //reload current view
        let view = this.navCtrl.getActive();
        let id = this.navparams.get('id');
		if(view.component.name == 'Appointment_statusPage' && id == message.order_id){
			this.loadOrder();
		}
      }
    }

	ionViewWillLoad(){
	    this.storage.get('cuserinfo').then(result => {
	        this.user = JSON.parse(result);
			this.loadOrder();
		});
	}

	ionViewWillLeave(){
		if(this.navparams.get("popped")){
			this.navCtrl.getPrevious().data.popped = 1;
		}
	}

	ionViewWillEnter(){
  		if(this.navparams.get("popped")){
  			this.loadOrder();
  		}
  	}

  	loadOrder(){
  		let id = this.navparams.get('id'); 
  		this.http.get<any>(APIURL+'orders/'+id+'?access-token='+this.user.token)
		.subscribe({
			next: data => {
				this.showLoader = false;
				this.order = data;
				this.subcat = data.subcategory
				this.provider = data.provider;
				this.getImages();
				this.orderImages = (data.image != null) ? data.image.split(",") : [];
				if(data.payment != null && data.payment.payment_status == 'Paid'){
					this.unpaid = false;
				}
			},
			error: error => {
				console.error('There was an error!', error);
			}
		});
  	}

	openPopup(index){
		let modal = this.modalCtrl.create(GalleryModal, {
		  photos: [{type: 'image', url: this.baseurl+this.orderImages[index]}],
		  initialSlide: 0
		});
		modal.present();
	}

	cancelOrder(){
		let alert = this.alertCtrl.create({
		    title: 'Confirm Cancellation',
		    message: 'Are you sure you want to cancel this order?',
		    buttons: [
		        {
		          text: 'Cancel',
		          role: 'cancel',
		          handler: () => {}
		        },
		        {
		          text: 'Yes',
		          handler: () => {
		          	this.showLoader = true;
		            this.http.put(APIURL+'orders/'+this.order.id+'?access-token='+this.user.token, {status: 'Cancelled'})
		            .subscribe({
		              next: response => {
		                this.showLoader = false;
		                this.navCtrl.getPrevious().data.popped = 1;
		                this.navCtrl.pop();
		              },
		              error: err => {
		                this.showLoader = false;
		                console.log(err)
		              }
		            })
		          }
		        }
		      ]
		    });
		    alert.present();
	}

	getImages(){
		switch(this.order.status){
			case 'Pending':
				this.status_img = 'assets/imgs/ic_exp_pending_req.png';
			break;
			case 'Quoted':
				this.status_img = 'assets/imgs/ic_exp_in_process.png';
			break;
			case 'Accepted':
			case 'Scheduled':
				this.status_img = 'assets/imgs/ic_exp_accepted.png';
			break;
			case 'Complete':
				this.status_img = 'assets/imgs/ic_exp_finished.png';
			break;
			default:
				this.status_img = 'assets/imgs/ic_exp_pending_req.png';
			break;
		}
	}

	approve(){
		this.navCtrl.push(Book_appointmentPage,{order_id: this.order.id});
	}

	reject(){
		let alert = this.alertCtrl.create({
		    title: 'Confirm Rejection',
		    message: 'Are you sure you want to reject this order? Order will be cancelled.',
		    buttons: [
		        {
		          text: 'Cancel',
		          role: 'cancel',
		          handler: () => {}
		        },
		        {
		          text: 'Reject',
		          handler: () => {
		          	//ask reason
		          	let reasons_alert = this.alertCtrl.create();
				    reasons_alert.setTitle('Reason of Rejection');

				    reasons_alert.addInput({
				      type: 'radio',
				      label: 'Quotation too high.',
				      value: 'Quotation too high.',
				      checked: true
				    });
				    reasons_alert.addInput({
				      type: 'radio',
				      label: 'Got another service provider at cheaper rates.',
				      value: 'Got another service provider at cheaper rates.',
				      checked: false
				    });
				    reasons_alert.addInput({
				      type: 'radio',
				      label: 'Service not required anymore.',
				      value: 'Service not required anymore.',
				      checked: false
				    });
				    reasons_alert.addInput({
				      type: 'radio',
				      label: 'Other.',
				      value: 'Other.',
				      checked: false
				    });

				    reasons_alert.addButton('Cancel');
				    reasons_alert.addButton({
				      text: 'OK',
				      handler: data => {
				      	if(data == 'Other.'){
				      		let other_alert = this.alertCtrl.create({
							    title: 'Other Reason',
							    cssClass:'quotation',
							    inputs: [
							      {
							        name: 'reason',
							        placeholder: 'Reason for Rejection'
							      }
							    ],
							    buttons: [
							      {
							        text: 'Cancel',
							        role: 'cancel',
							        handler: data => {
							          console.log('Cancel clicked');
							        }
							      },
							      {
							        text: 'Submit',
							        handler: data => {
							          if (data.reason.trim() == '' || data.reason.length < 4) {
							            const toast = this.toast.create({
									      message: 'Please enter valid Reason. It should be minimum 4 characters.',
									      duration: 3000,
									      cssClass: 'toast-danger',
									      position: 'top'
									    });
									    toast.present();
									    return false;
							          } else {
							          	this.showLoader = true;
							          	let d = new Date();
							          	let qdate = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
							            this.http.put(APIURL+'orders/'+this.order.id+'?access-token='+this.user.token, {status: 'Rejected', reject_reason: data.reason, quotation_approved: 'N', quotation_approved_date: qdate})
							            .subscribe({
							              next: response => {
							                this.showLoader = false;
							                this.navCtrl.getPrevious().data.popped = 1;
							                this.navCtrl.pop();
							              },
							              error: err => {
							                this.showLoader = false;
							                console.log(err)
							              }
							            })
							          }
							        }
							      }
							    ]
							  });
							  other_alert.present();
				      	} else {
				      		this.showLoader = true;
				          	let d = new Date();
				          	let qdate = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
				            this.http.put(APIURL+'orders/'+this.order.id+'?access-token='+this.user.token, {status: 'Rejected', reject_reason: data, quotation_approved: 'N', quotation_approved_date: qdate})
				            .subscribe({
				              next: response => {
				                this.showLoader = false;
				                this.navCtrl.getPrevious().data.popped = 1;
				                this.navCtrl.pop();
				              },
				              error: err => {
				                this.showLoader = false;
				                console.log(err)
				              }
				            })
				      	}
				      }
				    });
				    reasons_alert.present();
		          }
		        }
		      ]
		    });
	    alert.present();
	}

	takeOrderNote(){
		let alert = this.alertCtrl.create({
	    title: 'Order Comment',
	    cssClass:'quotation',
	    inputs: [
	      {
	        name: 'note',
	        placeholder: 'Did you face any issues for this order?'
	      }
	    ],
	    buttons: [
	      {
	        text: 'Cancel',
	        role: 'cancel',
	        handler: data => {
	          console.log('Cancel clicked');
	        }
	      },
	      {
	        text: 'Submit',
	        handler: data => {
	          if (data.note.trim() == '' || data.length < 10) {
	            const toast = this.toast.create({
			      message: 'Please enter valid Comment. It should be minimum 10 characters.',
			      duration: 3000,
			      cssClass: 'toast-danger',
			      position: 'top'
			    });
			    toast.present();
			    return false;
	          } else {
	          	this.submitNote(data.note.trim());
	          }
	        }
	      }
	    ]
	  });
	  alert.present();	
	}

	submitNote(comment){
		this.showLoader = true;

		let order_id = this.navparams.get('id');
		let d = new Date();
		
		var data = {order_id: order_id, comment: comment, created_at: d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds(), note_from: 'Customer', from_id: this.user.id};

		let formData = new FormData();
		for ( var key in data ) {
		    formData.append(key, data[key]);
		}

		//sending api request
		this.http.post(APIURL+'order-notes?access-token='+this.user.token,formData)
		.subscribe({
			next: response => {
				this.showLoader = false;
				let alert = this.alertCtrl.create({
				    title: 'Success',
				    subTitle: 'Your Comment has been submitted successfully. We will call you incase we need your assistance.',
				    buttons: ['OK']
				  });
				alert.present();
			},
			error: err => {
				this.showLoader = false;
				console.error(err);
			}
		})
	}

	openSelect(){
		document.getElementById('paymentMode').click()
	}

	pay(){
		//alert(this.paymentMode)
		if(this.subcat.visiting_charge > 0){
			document.getElementById('paymentType').click()
		} else {
			this.processPayment();
		}
	}

	async processPayment(){
		let loading = this.loadingCtrl.create({
		    content: 'Processing Payment...'
		});
		loading.present();

		//if payment mode is cash
		if(this.paymentMode == 'Cash'){
			let d  = new Date();
			let formdata = {
				order_id: this.order.id, 
				amount: (this.paymentType == 'service_charge') ? this.order.quotation : this.subcat.visiting_charge,
				payment_status: 'Paid', 
				payment_mode: 'Cash',
				created_at: d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds(),
				updated_at: d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
			}
			this.http.post(APIURL+"orders/payment?access-token="+this.user.token, formdata)
			.subscribe({
				next: response => {
					loading.dismiss();
					this.unpaid = false;
					let alert = this.alertCtrl.create({
					    title: 'Payment Successful',
					    subTitle: 'Hope you enjoyed our service. Please take out few seconds to rate our service.',
					    buttons: [{
					        text: 'OK',
					        handler: () => {
					          let modal = this.modalCtrl.create(OrderRatingPage,{order_id: this.order.id, token: this.user.token});
					          modal.present();
					        }
					      }]
					  });
					  alert.present();
				},
				error: err => {
					loading.dismiss();
					let alert = this.alertCtrl.create({
					    title: 'Some Technical Glitch Observed',
					    subTitle: err,
					    buttons: [{
					        text: 'OK'
					    }]
					});
					alert.present();
				}
			})
		} else {
			let dt = new Date().getTime().toString();
			this.orderid = 'EVSR-SVCHG-'+dt.substring(dt.length - 5)
			let txnRequest = {
			    "MID": "vRXbJb75879571779361",
			    "ORDER_ID": this.orderid,
			    "CUST_ID": this.user.id,
			    "INDUSTRY_TYPE_ID": "Retail",
			    "CHANNEL_ID": "WEB",
			    "TXN_AMOUNT": (this.paymentType == 'service_charge') ? this.order.quotation.toFixed(2) : this.subcat.visiting_charge.toFixed(2),
			    "WEBSITE": "DEFAULT",
			    "CALLBACK_URL" : "https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID="+this.orderid
			}
			try {
				await this.generateChecksumAPI(txnRequest);
				txnRequest['CHECKSUMHASH'] = this.checksum; 
			}
			catch (err) {
			    console.error('Error Generating Checksum', err)
			}
			txnRequest["ENVIRONMENT"] = "production";
			loading.dismiss();
			if (this.platform.is('cordova')) {
			    (<any>window).paytm.startPayment(
					txnRequest,
					this.successCallback,
					this.failureCallback
				);
			} else {
			    // Cordova Not Present
			    return;
			}
		}
	}

	async generateChecksumAPI(d): Promise<boolean> {
		await this.http.post(APIURL+"orders/checksum?access-token="+this.user.token, d)
		.toPromise()
		.then(response => {
			this.checksum = response.toString();
		});
		return true;
	}

	successCallback = (response) => {
	    if (response.STATUS == "TXN_SUCCESS") {
	    	let loading = this.loadingCtrl.create({
			    content: 'Updating transaction details...'
			});
			loading.present();
			response['EORDERID'] = this.order.id;
			response['ISVISITING'] = (this.paymentType == 'visiting_charge') ? 'Y' : 'N';
			this.http.post(APIURL+"orders/payment-callback?access-token="+this.user.token,response)
	    	.subscribe({
	    		next: response => {
					loading.dismiss();
					this.unpaid = false;
					let alert = this.alertCtrl.create({
					    title: 'Payment Successful',
					    subTitle: 'Hope you enjoyed our service. Please take out few seconds to rate our service.',
					    buttons: [{
					        text: 'OK',
					        handler: () => {
					          let modal = this.modalCtrl.create(OrderRatingPage,{order_id: this.order.id, token: this.user.token});
					          modal.present();
					        }
					    }]
					});
					alert.present();
				},
				error: err => {
					loading.dismiss();
					let alert = this.alertCtrl.create({
					    title: 'Some Technical Glitch Observed',
					    subTitle: err.message,
					    buttons: [{
					        text: 'OK'
					    }]
					});
					alert.present();
				}
	    	})
	    } else {
	        alert(`Transaction Failed for reason: - ${response.RESPMSG} (${response.RESPCODE})`);
	    }
	}

	failureCallback = (error) => {
	    alert(error.RESPMSG);
	}

	onImageLoad(e){
		e.classList.add('visible')
	  	e.classList.remove('invisible')
	}

}
