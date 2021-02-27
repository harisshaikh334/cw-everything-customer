import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
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
	constructor(public navCtrl: NavController, public modalController: ModalController, private http: HttpClient, public storage: Storage) {

	}

	ionViewWillLoad(){
		this.storage.get('cuserinfo').then(result => {
		  this.user = JSON.parse(result);
		  this.loadData()
		})
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
