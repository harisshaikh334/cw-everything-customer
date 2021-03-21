import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { APIURL } from '../../app/apiconfig';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';

import { Plumber_profilePage } from '../plumber_profile/plumber_profile';
@Component({
  selector: 'page-list_of_plumber',
  templateUrl: 'list_of_plumber.html'
})
export class List_of_plumberPage {

	public subcategory: string = '';
	public user: any = {};
	public showLoader: boolean = true;
	public providers: any = [];
	public apiurl: string = APIURL;

	constructor(public navCtrl: NavController, public geolocation: Geolocation, public storage: Storage, private http: HttpClient, private navparams: NavParams) {

	}

	ionViewDidLoad(){
		let subcat_id = this.navparams.get('subcat_id');
		this.subcategory = this.navparams.get('subcat');
		this.storage.get('cuserinfo').then(result => {
			this.user = JSON.parse(result);
			let lat = 19.176667;
			let long = 73.04222;
			//getting co-ordinates
			if (window['cordova']) {
				this.geolocation.getCurrentPosition().then(res => {
					this.http.get(APIURL+'customers/providers?subcat_id='+subcat_id+'&lat='+res.coords.latitude+'&lng='+res.coords.longitude+'&access-token='+this.user.token)
					.subscribe({
						next: response => {
							this.showLoader = false;
							this.providers = response;
						},
						error: err => {
						  console.error(err);
						}
					});
				});
			} else {
				
				
				this.http.get(APIURL+'customers/providers?subcat_id='+subcat_id+'&lat='+lat+'&lng='+long+'&access-token='+this.user.token)
				.subscribe({
					next: response => {
						this.showLoader = false;
						this.providers = response;
					},
					error: err => {
						console.error(err);
					}
				});
			}
		});
	}

	plumber_profile(index){
		this.navCtrl.push(Plumber_profilePage,{subcat_id: this.navparams.get('subcat_id'), obj: JSON.stringify(this.providers[index])})
	}  
}
