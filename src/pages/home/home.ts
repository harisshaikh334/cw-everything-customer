import { Component } from '@angular/core';
import { NavController, ModalController, Platform, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CategoryPage } from '../category/category';
import { HttpClient } from '@angular/common/http';
import { APIURL, IMAGE_URL } from '../../app/apiconfig';
import { Geolocation } from '@ionic-native/geolocation';
import { ImageAttribute } from 'ionic-image-loader';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Diagnostic } from '@ionic-native/diagnostic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public user: any = {};
	public location: string = "Loading Location...";
	public categories: any = [];
	public url: string = APIURL;
	public showLoader: boolean = true;
	public imageAttributes: ImageAttribute[] = [];
	public image_url = IMAGE_URL;
	popup_image:string = null;
	public banner_images = [];
	hidePop: boolean = true;
	popHeading: string = '';

	constructor(
		private locationAccuracy: LocationAccuracy, 
		public diagnostic: Diagnostic, 
		public platform: Platform, 
		public navCtrl: NavController, 
		public modalCtrl: ModalController, 
		public geolocation: Geolocation, 
		private events:Events,
		private http: HttpClient, 
		public storage: Storage) {
		this.imageAttributes.push({
		  element: 'class',
		  value: 'crop_img'
		})
		platform.ready().then(() => {
			if(platform.is('cordova')){
				var that = this;
				diagnostic.isLocationEnabled()
			    .then(function (available) {
			      if(!available){
			      	locationAccuracy.request(locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
				    .then((res) => {
				    	that.getLocation();
				      },
				      error => alert('You will not be able to find service providers without enabling location.')
				    );
			      } else {
			      	that.getLocation();
			      }
			    }).catch(function (error) {
			      console.log(error)
			    });
			} else {
				this.getLocation();
			}
		});
		this.events.subscribe("loginDone",()=>{
			console.log('loginDone',);
			this.storage.get('cuserinfo').then(result => {
			  this.user = JSON.parse(result);
			  console.log('this.user',this.user);
			});
		})
	}

	ionViewDidLoad(){
		this.storage.get('cuserinfo').then(result => {
			this.user = JSON.parse(result);
			this.loadBanners();
			this.loadPopUp();
			this.http.get(APIURL+'categories').subscribe({
		        next: response => {
		        	this.showLoader = false;
		        	this.categories = response;
		        },
		        error: err => {
		          console.error(err);
		        }
		    });
		});
	}

	loadBanners(){
		this.http.get(APIURL+'banners').subscribe({
			next: (response:any) => {
				response.forEach(element => {
					element['image'] = this.image_url + element['image'];
				});
				console.log('banners response is ', response);
				this.banner_images = response;
			},
			error: err => {
			  console.error(err);
			}
		});
	}
	loadPopUp(){
		this.http.get(APIURL+'popups').subscribe({
			next: (response:any) => {
				if (response && response[0] && response[0].image) {
					setTimeout(() => {
						this.hidePop = false;
						this.popup_image = this.image_url + response[0]['image'];
						this.popHeading = response[0]['name'];
					}, 10000);
					
					// let profileModal = this.modalCtrl.create(ImagePopupPage, { popup_image: this.image_url + response[0]['image'] });
					// profileModal.onDidDismiss(data => {
					// 	console.log(data);
					// });
					// profileModal.present();
				}else {
					this.hidePop = true;
				}
				console.log('popup response is ', response);
			},
			error: err => {
			  console.error(err);
			}
		});

	}

	getLocation(){
		
	    this.geolocation.getCurrentPosition().then((res) => {
	    	//let location='lat '+res.coords.latitude+' lang '+res.coords.longitude;
			this.http.get('https://us1.locationiq.com/v1/reverse.php?key=pk.1a8afa07fcfe194b039e91ef1575087c&lat='+res.coords.latitude+'&lon='+res.coords.longitude+'&format=json').subscribe({
		        next: (data: any) => {
		        	var formatted = data.address;
					var city = '';
					if(formatted.suburb) city = formatted.suburb+' - '+formatted.county;
					else city = formatted.county;
					this.location = city;
		        },
		        error: err => {
		          console.error(err);
		        }
		    });
	    }).catch((error) => {
	    	console.log('Error getting location', error);
	    });
	}

	getItems(e){
		this.navCtrl.push(CategoryPage,{q: e.target.value, category: 'Searching...'})
	}

	category(id, cat){
		this.navCtrl.push(CategoryPage,{id: id, category: cat})
	}
}
