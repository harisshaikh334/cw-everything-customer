import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, ToastController, App, Tabs } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../app/apiconfig';
import { Storage } from '@ionic/storage';
import { AddAddressPage } from '../add-address/add-address';

@Component({
  selector: 'page-my_addresses',
  templateUrl: 'my_addresses.html'
})
export class My_addressesPage {

	showLoader: boolean = true;
	addresses: any = [];
	user: any = {}
	params ={};
	selected_address = {};
	constructor(public navCtrl: NavController,public navParam: NavParams ,public app: App ,public toastSer: ToastController  ,public modalController: ModalController, private http: HttpClient, public storage: Storage) {

	}

	ionViewWillLoad(){
		this.storage.get('cuserinfo').then(result => {
		  this.user = JSON.parse(result);
		  this.loadData()
		});
		this.params = this.navParam.data;
		console.log('params are ', this.params);
	}

	loadData(){
		this.http.get<any>(APIURL+'customers/addresses?access-token='+this.user.token)
		.subscribe({
			next: response => {
				this.addresses = response;
				this.showLoader = false;
			},
			error: err => {
				this.showLoader = false;
			}
		})
	}

	selectAddress(data) {
		if (this.params['page'] == 'cart_details') {
			console.log('select address' ,data);
			this.selected_address = data;
		}
		// if (this.params['page'] == 'cart_details') {
		// 	this.params['address'] = data;
		// }
	}

	placeOrder() {
		if (this.selected_address && this.selected_address['id']) {
			let sub_total = 0;
			let grand_total = 0;
			let subcat_id;
			let sp_id;
			this.params['cart'].forEach(element => {
				subcat_id = element.subcat_id;
				sp_id = element.sp_id;
				sub_total = sub_total + (element.mrp * element.qty);
				grand_total = sub_total + (element.mrp * element.qty);
			});
			console.log('totals are ', grand_total, sub_total);
			let formData = new FormData();
			formData.append('is_product', '1');
			formData.append('customer_id', this.user.id);
			formData.append('address_id', this.selected_address['id']);
			formData.append('service_address', this.selected_address['address']);
			formData.append('grand_total', grand_total.toString());
			formData.append('sub_total', sub_total.toString());
			formData.append('sp_id', sp_id);
			formData.append('subcat_id', subcat_id);
			this.showLoader = true;
	   		this.http.post<any>(APIURL+'orders?access-token='+this.user.token, formData)
			   .subscribe({
				next: response => {
					this.showLoader = false;
					if(response.error){
						const toast = this.toastSer.create({
						  message: response.reason,
						  duration: 5000,
						  cssClass: 'toast-danger',
						  position: 'top'
						});
						toast.present();
						return false;
					} else {
						const toast = this.toastSer.create({
						  message: 'Order successfully created. You will be notified once you receive quotation from service provider.',
						  duration: 5000,
						  cssClass: 'toast-success',
						  position: 'top'
						});
						toast.present();
						this.storage.remove('cart_list');
						const tabsNav = this.app.getNavByIdOrName('myTabsNav') as Tabs;
						tabsNav.select(1);
						this.navCtrl.popToRoot();
					}
				},
				error: error => {
					this.showLoader = false;
					console.error('There was an error!', error);
					const toast = this.toastSer.create({
						message: 'Something went wrong.',
						duration: 5000,
						cssClass: 'toast-danger',
						position: 'bottom'
					  });
					  toast.present();
				}
			})


		} else {
			const toast = this.toastSer.create({
				message: 'Please select address',
				duration: 3000,
				cssClass: 'toast-danger',
				position: 'bottom'
			});
			toast.present();
		}
	}

	editAddress(index, id){
		const modal = this.modalController.create(AddAddressPage,{obj: this.addresses[index], canDelete: this.addresses.length > 1});
		modal.onDidDismiss(data => {
	     if(data){
	     	this.loadData()
	     }
	   });
       modal.present();
	}

	addAddressModal(){
		const modal = this.modalController.create(AddAddressPage);
		modal.onDidDismiss(data => {
	     if(data){
	     	this.loadData()
	     }
	   });
    	modal.present();	
	}

}
