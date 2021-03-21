import { Component } from '@angular/core';
import { NavController, Platform, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { APIURL } from '../../app/apiconfig';
import { OrderDetailsPage } from '../order-details/order-details';

/**
 * Generated class for the OrderHostoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-order-hostory',
  templateUrl: 'order-hostory.html',
})
export class OrderHostoryPage {
  showLoader: boolean = false;
  user:any = {};
  order_list = [];
  constructor(public navCtrl: NavController, public toastController: ToastController, public popoverController: PopoverController, public navparams: NavParams, public platform: Platform, public storage: Storage, private http: HttpClient) {
  }

  ionViewDidLoad() {
    this.storage.get('cuserinfo').then(result => {
      this.user = JSON.parse(result);
      this.loadOrders();
    });
  }
  loadOrders() {
    this.showLoader = true;
		this.http.get<any>(APIURL+'orders?access-token='+this.user.token+'&where[sp_id]='+this.user.id+"&where[is_product]=1")
		.subscribe({
			next: data => {
				this.showLoader = false;
				console.log('data is ', data);
        this.order_list = data.orders;
			},
			error: err => {
				this.showLoader = false;
			}
		});	
  }
  order_details(item) {
    this.navCtrl.push(OrderDetailsPage, {order: item})
  }

}
