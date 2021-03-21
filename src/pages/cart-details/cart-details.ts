import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { APIURL, IMAGE_URL } from '../../app/apiconfig';
import { AddAddressPage } from '../add-address/add-address';
import { My_addressesPage } from '../my_addresses/my_addresses';

/**
 * Generated class for the CartDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-cart-details',
  templateUrl: 'cart-details.html',
})
export class CartDetailsPage {
  showLoader: boolean = true;
  cart_list = [];
  user:any;
  showDesc: boolean = false;
  productDesc: string = '';
  image_prefix = IMAGE_URL;
  total_price: number = 0;
  selected_address:any = {};
  constructor(public navCtrl: NavController,public events: Events, public navParams: NavParams, public http: HttpClient, public storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('cuserinfo').then(result => {
			this.user = JSON.parse(result);
      this.loadCartList();
    })
    
  }
  
  loadCartList() {
    let url =APIURL +"customers/cart-list?customer_id="+this.user.id+"&access-token="+this.user.toke;
		this.http.get(url)
			.subscribe({
		        next: (response:any) => {
		        	this.showLoader = false;
		        	this.cart_list = response;
              this.total_price = 0;
              this.cart_list.forEach(element => {
                  this.total_price = this.total_price + (element.sale_price * element.qty);
              });
		        },
		        error: err => {
		        	this.showLoader = false;
		          	console.error(err);
		        }
		});
  }
  openDesc(prod) {
		this.productDesc = prod.description;
		this.showDesc = true;
	}

	closeDesc() {
		this.productDesc = '';
		this.showDesc = false;
	}

  removeFromCart(item) {
    console.log('item from cart is ', item);
    // return false;
		let url = APIURL + "customers/del-cart?access-token="+ this.user.token+"&cart_id="+item['cart_id'];
		this.showLoader = true;
		this.http.get(url)
			.subscribe({
		        next: response => {
		        	this.showLoader = false;
		        	this.getCartCount();
					    this.loadCartList();
		        },
		        error: err => {
		        	this.showLoader = false;
		          	console.error(err);
		        }
		});
	}

  getCartCount() {
		let url = APIURL +"customers/cart-count?customer_id="+this.user.id+"&access-token="+ this.user.token;
		this.showLoader = true;
		
		this.http.get(url)
			.subscribe({
		        next: response => {
		        	this.showLoader = false;
		        	this.events.publish('add_to_cart', response['cart_count']);
		        },
		        error: err => {
		        	this.showLoader = false;
		          	console.error(err);
		        }
		});
	}

  selectAddress(address) {
    console.log('selected_address ', address);
    this.selected_address = address;
  }

  proceedToAddress(){
    
    this.navCtrl.push(My_addressesPage, {page: 'cart_details', cart: this.cart_list});
  }

}
