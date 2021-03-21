import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { APIURL } from '../../app/apiconfig';

/**
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage {
  showLoader: boolean = false;
  user:any = {};
  order_details :any = {};
  showDesc: boolean = false;
  description: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailsPage');
    this.storage.get('cuserinfo').then(result => {
      this.user = JSON.parse(result);
      this.loadOrderDetails();
    });
  }

  loadOrderDetails() {
    let order = this.navParams.get('order');
    this.showLoader = true;
    
		this.http.get<any>(APIURL+'orders/'+order.id+'?access-token='+this.user.token)
		.subscribe({
			next: data => {
				this.showLoader = false
        this.order_details = data;
        console.log('order_details is ', this.order_details);
        // this.order_details = data.orders;
			},
			error: err => {
				this.showLoader = false;
			}
		});
  }
  openDesc(prod) {
		this.description = prod.description;
		this.showDesc = true;
	}
  closeDesc() {
		this.description = '';
		this.showDesc = false;
	}
}
