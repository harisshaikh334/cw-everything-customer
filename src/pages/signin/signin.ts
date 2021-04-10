import { Component } from '@angular/core';
import { NavController, ToastController, Platform, Events, NavParams } from 'ionic-angular';
import{ Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { APIURL } from '../../app/apiconfig';
//import { FirebaseX } from '@ionic-native/firebase-x/ngx';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { ForgotPage } from '../forgot/forgot';
import { Appointment_statusPage } from '../appointment_status/appointment_status';
import { Plumber_profilePage } from '../plumber_profile/plumber_profile';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})

export class SigninPage {

	public loginForm: FormGroup;
	public push_token: string = '';
	public submitAttempt: boolean = false;
	public showLoader: boolean = true;

	firebasePlugin;
	
	constructor(
		public navCtrl: NavController,
		public events:Events, 
		private platform: Platform, 
		public formBuilder: FormBuilder, 
		private http: HttpClient, 
		public toastController: ToastController, 
		public storage: Storage,
		public navparams:NavParams
		) {
		
		this.loginForm = formBuilder.group({
			mobile: ['', Validators.compose([
				Validators.required,
				Validators.minLength(10),
				Validators.pattern('^[0-9{10}]+$')
			])],
			password: ['', Validators.required]
		});
	}

	ionViewDidLoad(){
		this.platform.ready().then(() => {
	        this.storage.get('cuserinfo').then(result => {
	        	this.showLoader = false;
	        	if(typeof result != 'undefined' && result !== null && result !== ''){
					let user = JSON.parse(result);
	        		if(this.platform.is('cordova')){
			        	
			        	this.firebasePlugin.onTokenRefresh((token: string) => {
							this.push_token = token;
							this.http.put<any>(APIURL+'customers/'+user.id+'?access-token='+user.token, {push_token: token})
							.subscribe({
								next: data => {
								},
				    			error: error => {
				    			}
							});
						});
			        }

		        	this.navCtrl.setRoot(TabsPage);
					this.getCartList(user);
					this.getCartCount(user);
		        }
	        });
        
        	if(this.platform.is('cordova')){
				this.firebasePlugin = (<any>window).FirebasePlugin;
				//this.firebasePlugin.onMessageReceived(this.onMessageReceived.bind(this));
				this.firebasePlugin.getToken(token => {
					this.push_token = token;
				});
			}
	    });
    }

	getCartList(user) {
		
		let url =APIURL +"customers/cart-list?customer_id="+user.id+"&access-token="+ user.token;
		this.http.get(url)
			.subscribe({
		        next: (response:any) => {
					this.storage.remove('cart_list');
					response.forEach(element => {
						element['id'] = element['cart_id']
					});
		        	this.storage.set('cart_list', response);
		        },
		        error: err => {
		          	console.error(err);
		        }
		});

	}

	getCartCount(user) {
		let url = APIURL +"customers/cart-count?customer_id="+user.id+"&access-token="+ user.token;
		
		this.http.get(url)
			.subscribe({
		        next: response => {
		        	this.events.publish('add_to_cart', response['cart_count']);
		        },
		        error: err => {
		          	console.error(err);
		        }
		});
	}

    /*onMessageReceived(message){
      if (message.tap) { 
        this.navCtrl.push(Appointment_statusPage, {id: message.order_id})
      } else {
        //received while app in foreground (show a toast)
        let toast = this.toastController.create({
          message: message.body,
          duration: 5000,
          position: 'top',
          cssClass: 'toast-info'
        });
        toast.present();
      }
    }*/

    signup(){
		this.navCtrl.push(SignupPage)
	}

	forgot(){
		this.navCtrl.push(ForgotPage);
	}

	login(){
		this.submitAttempt = true;
		if(this.loginForm.valid){
			this.showLoader = true
			var data = {push_token: this.push_token, mobile: this.loginForm.controls.mobile.value, password: this.loginForm.controls.password.value}
			this.http.post<any>(APIURL+'customers/login', data)
			.subscribe({
				next: data => {
					console.log('data',data);
					this.submitAttempt = false;
					this.showLoader = false;
					
					if(data.error == 1){
						const toast = this.toastController.create({
					      message: data.reason,
					      duration: 5000,
					      cssClass: 'toast-danger'
					    });
					    toast.present();
					} else {
						this.loginForm.controls.mobile.setValue('');
						this.loginForm.controls.password.setValue('');
						this.storage.set('cuserinfo', JSON.stringify(data)).then(()=>{
							this.events.publish('loginDone');
							let subcat_id = this.navparams.get('subcat_id');
							let obj = this.navparams.get('obj');
							console.log('subcat_id',subcat_id);
							if(subcat_id){
								console.log('this.navCtrl',this.navCtrl);
								this.navCtrl.push(Plumber_profilePage,{subcat_id:subcat_id,obj:obj});
							}else{
								this.navCtrl.setRoot(TabsPage);
							}
						});
					}
				},
    			error: error => {
    				this.submitAttempt = false;
    				console.error('There was an error!', error);
    			}
			});
		}
	}
}
