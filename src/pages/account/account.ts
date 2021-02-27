import { Component } from '@angular/core';
import { NavController, App, Platform, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../app/apiconfig';
import { SocialSharing } from '@ionic-native/social-sharing';

import {My_profilePage } from '../my_profile/my_profile';
import {ContactPage } from '../contact/contact';
import {AboutPage } from '../about/about';
import {FaqPage } from '../faq/faq';
import {SigninPage} from '../signin/signin';
import {My_addressesPage } from '../my_addresses/my_addresses';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  public online: boolean = false;
  public user: any = {};
  public showLoader: boolean = false;
  public watch: any = null;

  constructor(public navCtrl: NavController, private socialSharing: SocialSharing, public alertCtrl: AlertController, public platform: Platform, private http: HttpClient, public storage: Storage, private app: App) {

  }

  ionViewDidEnter(){
    this.storage.get('cuserinfo').then(result => {
      this.user = JSON.parse(result);
    });
  }
  my_addresses(){
    this.navCtrl.push(My_addressesPage)
  }
  my_profile(){
    this.navCtrl.push(My_profilePage)
  }   
  contact(){
    this.navCtrl.push(ContactPage)
  }
  openPrivacy(){
    window.open("https://everythingservices.in/privacy",'_system', 'location=yes');
  }
  about(){
    this.navCtrl.push(AboutPage)
  }  
  faq(){
    this.navCtrl.push(FaqPage)
  }  
  share(){
    this.socialSharing.share("Gone are the days to ask people for numbers of service providers. This app covers it all. I love Everything Services. You must give it a try.","","","https://play.google.com/store/apps/details?id=com.everything.services")
  }
  logout(){
    let alert = this.alertCtrl.create({
    title: 'Confirm Logout',
    message: 'Are you sure you want to logout?',
    buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.showLoader = true;
            this.http.put(APIURL+'customers/'+this.user.id+'?access-token='+this.user.token, {push_token: ''})
            .subscribe({
              next: response => {
                this.showLoader = false;
                this.storage.remove('cuserinfo');
                this.app.getRootNav().setRoot(SigninPage)
              },
              error: err => {
                this.showLoader = false;
                this.storage.remove('cuserinfo');
                this.app.getRootNav().setRoot(SigninPage);
              }
            })
          }
        }
      ]
    });
    alert.present();
  }

  remove(){
    let alert = this.alertCtrl.create({
    title: 'Confirm Account Deletion!',
    message: 'Are you sure you want to premanently remove your account?',
    buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.showLoader = true;
            this.http.put(APIURL+'customers/'+this.user.id+'?access-token='+this.user.token, {status: 0})
            .subscribe({
              next: response => {
                this.showLoader = false;
                this.storage.remove('cuserinfo');
                this.app.getRootNav().setRoot(SigninPage)
              },
              error: err => {
                this.showLoader = false;
                this.storage.remove('cuserinfo');
                this.app.getRootNav().setRoot(SigninPage);
              }
            })
          }
        }
      ]
    });
    alert.present();
  }

}
