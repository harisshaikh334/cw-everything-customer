import { Component } from '@angular/core';
import { NavController, Platform, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { APIURL } from '../../app/apiconfig';
import { Appointment_statusPage } from '../appointment_status/appointment_status';
import {My_profilePage } from '../my_profile/my_profile';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html'
})
export class AppointmentsPage {
	appointments_tab: string = "upcoming";
	showLoader: boolean = false;
	approved: any = null;
	orders: any = [];
	orderStack: any = [];
	user : any = {};
	showfee: boolean = false;
	filterVal: string = 'All';

	firebasePlugin;

	constructor(public navCtrl: NavController, public toastController: ToastController, public popoverController: PopoverController, public navparams: NavParams, public platform: Platform, public storage: Storage, private http: HttpClient) {
		
	}

	ionViewWillLoad(){
		this.storage.get('cuserinfo').then(result => {
        	this.user = JSON.parse(result);
        	this.loadOrders();
        });
	}

	ionViewDidLoad(){
		if(this.platform.is('cordova')){
			this.firebasePlugin = (<any>window).FirebasePlugin;
			this.firebasePlugin.onMessageReceived(this.onMessageReceived.bind(this));
		}
	}

	ionViewWillEnter(){
  		if(this.navparams.get("popped")){
  			this.loadOrders();
  		}
  	}

	onMessageReceived(message){
      if (message.tap) { 
        this.navCtrl.push(Appointment_statusPage, {id: message.order_id})
      } else {
      	//reload appointments
      	this.loadOrders();
      	
        //received while app in foreground (show a toast)
        let toast = this.toastController.create({
          message: message.body,
          duration: 5000,
          position: 'top',
          cssClass: 'toast-info'
        });
        toast.present();
      }
    }

  	loadOrders = () => {
		this.showLoader = true;
		this.http.get<any>(APIURL+'orders?access-token='+this.user.token+'&where[customer_id]='+this.user.id)
		.subscribe({
			next: data => {
				this.showLoader = false;
				this.approved = data.approved;
				this.orders = data.orders;
				this.orderStack = data.orders;
			},
			error: err => {
				this.showLoader = false;
			}
		});	
	}

	doRefresh(refresher) {
	    this.loadOrders();

	    let interval = setInterval(() => {
	      if(this.showLoader == false){
	      	refresher.complete();
	      	clearInterval(interval)
	      }
	    }, 1000);
	}

	openPopover(ev){
		const popover = this.popoverController.create(PopoverPage,{filter: this.filterVal});
		popover.onDidDismiss(data => {
			if(data){
				this.filterVal = data.value;
				if(data.value == 'All'){
					this.orders = this.orderStack;	
				} else {
					this.orders = this.orderStack.filter(x => x.status == this.filterVal);	
				}
			}
	    });
	    popover.present({
	    	ev: ev
	    });
	}

	filterOrders(type){
		if(typeof this.orders != 'undefined'){
			if(type == 'Past')
				return this.orders.filter(x => x.status == 'Complete' || x.status == 'Rejected' || x.status == 'Cancelled');
			else
				return this.orders.filter(x => x.status != 'Complete' && x.status != 'Cancelled' && x.status != 'Rejected');
		} else {
			return [];
		}
	}

	getStatus(status){
		 switch(status){
		 	case 'Pending':
		 		return 'Awaiting Quotation';
		 	case 'Quoted':
		 		return 'Quotation Received';
		 	default:
		 		return status;
		 }
	}
  
	appointment_status(id){
		this.navCtrl.push(Appointment_statusPage, {id: id})
	}

	my_profile(){
	    this.navCtrl.push(My_profilePage)
	}

	onImageLoad(e){
		e.classList.add('visible')
	  	e.classList.remove('invisible')
	}
}
