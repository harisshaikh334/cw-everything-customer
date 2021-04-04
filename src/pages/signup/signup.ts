import { Component } from '@angular/core';
import { NavController, ToastController, NavParams, Platform } from 'ionic-angular';
import{ Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { distinctUntilChanged } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { APIURL } from '../../app/apiconfig';
//import { FirebaseX } from '@ionic-native/firebase-x/ngx';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

	public signupForm: FormGroup;
	public push_token: string = '';
	public submitAttempt: boolean = false;	
	public showLoader: boolean = false;	
	public otp: number = null;
	termsCheckbox:boolean=false;

	constructor(public navCtrl: NavController, private platform: Platform, public navparams: NavParams, public formBuilder: FormBuilder, private http: HttpClient, public toastController: ToastController, public storage: Storage) {
	}

	ngOnInit() {
		this.buildForm();
		this.setEmailValidators();
	}

	ionViewDidEnter(){
		if(this.platform.is('cordova')){
			(<any>window).FirebasePlugin.getToken(token => this.push_token = token);
		}
	}

	buildForm(){
		this.signupForm = this.formBuilder.group({
			name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), 
			Validators.required])],
			email: [''],
			franchise_code: [''],
			contact: ['', Validators.compose([
				Validators.required,
				Validators.minLength(10),
				Validators.pattern('^[0-9{10}]+$')
			])],
			password: ['', Validators.compose([
				Validators.required,
				Validators.minLength(8)
			])],
			address: ['', Validators.compose([
				Validators.required,
				Validators.minLength(8)
			])],
			pincode: [''],
			// otp: ['', Validators.compose([
			// 	Validators.required,
			// 	Validators.minLength(6)
			// ])]
		});
	}

	sendOTP(){
		if(this.signupForm.get('contact').valid){
			this.otp = Math.floor(100000 + Math.random() * 900000);
			this.http.post(APIURL+'customers/send-otp', {otp: this.otp, phone: this.signupForm.get('contact').value})
			.subscribe({
				next: data => {
					//nothing to do
				},
    			error: error => {
    				console.error('There was an error!', error);
    			}
			});
		}
	}

	resend(){
		this.showLoader = true;
		if(this.signupForm.get('contact').valid){
			this.otp = Math.floor(100000 + Math.random() * 900000);
			this.http.post(APIURL+'customers/send-otp', {otp: this.otp, phone: this.signupForm.get('contact').value})
			.subscribe({
				next: data => {
					this.showLoader = false;
					alert('OTP has been resent!');
					//nothing to do
				},
    			error: error => {
    				this.showLoader = false;
    				console.error('There was an error!', error);
    			}
			});
		}
	}

	setEmailValidators(){
		const emailControl = this.signupForm.get('email');
		emailControl.valueChanges.pipe(distinctUntilChanged()).subscribe(value => {
			if(value != ''){
				emailControl.setValidators(Validators.pattern('^[a-zA-Z0-9.-_]{1,}@[a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}$'));
			} else {
				emailControl.setValidators(null);
			}
			emailControl.updateValueAndValidity();
		});
	}

	openTerms(){
		window.open("https://everythingservices.in/terms",'_system', 'location=yes');
	}
	
	signup(){

		this.submitAttempt = true;

		// if(this.signupForm.get('otp').value != this.otp){
		// 	this.signupForm.get('otp').markAsDirty();
		// 	return false;
		// }
		
		if(this.signupForm.valid){
			this.showLoader = true;
			var data = this.signupForm.value;
			console.log('data',data);
			data['push_token'] = this.push_token;
			delete data['otp'];
			this.http.post<any>(APIURL+'customers?key=25e86ce50a1544c871f066cff5651adb', data)
			.subscribe({
				next: data => {
					this.submitAttempt = false;
					this.showLoader = false;
					if(data.error){
						const toast = this.toastController.create({
					      message: data.reason,
					      duration: 3000,
					      cssClass: 'toast-danger'
					    });
					    toast.present();
					} else {
						const toast = this.toastController.create({
					      message: 'You are successfully registered. we will be glad to serve you.',
					      duration: 5000,
					      cssClass: 'toast-success'
					    });
					    toast.present();

					    var that = this;
						setTimeout(function(){
							that.navCtrl.pop();
						},3000);
					}
				},
    			error: error => {
    				this.submitAttempt = false;
    				this.showLoader = false;
    				const toast = this.toastController.create({
				      message: error.error.msg,
				      duration: 3000,
				      cssClass: 'toast-danger'
				    });
				    toast.present();
    			}
			});
		}
	} 
}
