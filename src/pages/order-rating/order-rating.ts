import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../app/apiconfig';

@Component({
  selector: 'page-order-rating',
  templateUrl: 'order-rating.html',
})
export class OrderRatingPage {

  ratingValue: number = 3
  comment: string = '';
  showLoader: boolean = false;

  constructor(public navCtrl: NavController, public toastController: ToastController, private http: HttpClient, public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  logRatingChange(e){
  	this.ratingValue = e;
  }

  saveRating(){
  	this.showLoader = true;
  	this.http.post(APIURL+"reviews?access-token="+this.navParams.get('token'), {rating: this.ratingValue, order_id: this.navParams.get('order_id'), comment: this.comment})
  	.subscribe({
  		next: response => {
  			this.showLoader = false;
  			this.toastController.create({
  				message: 'Thank you for your feedback.',
			      duration: 3000,
			      cssClass: 'toast-success',
			      position: 'top'
  			}).present();
  			setTimeout(() => {
  				this.dismiss();
  			},2000)
  		},
  		error: err => {
  			this.showLoader = false;
  		}
  	})
  }

  dismiss(){
  	this.viewCtrl.dismiss();
  }

}
