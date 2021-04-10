import { Component } from '@angular/core';

import { AppointmentsPage } from '../appointments/appointments';
//import { NotificationPage } from '../notification/notification';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
import { Storage } from '@ionic/storage';
import { SigninPage } from '../signin/signin';
import { Events } from 'ionic-angular';
//import { ChatsPage } from '../chats/chats';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  //tab2Root = NotificationPage;
  tab2Root = AppointmentsPage;
  tab3Root = AccountPage;
  SigninPage = SigninPage;
  user: any=false;
  LoginDone:boolean=false
  //tab5Root = ChatsPage;

  constructor(
    public storage: Storage,
    private events:Events
  ) {
    this.events.subscribe("loginDone",()=>{
      console.log('loginDone',);
      this.storage.get('cuserinfo').then(result => {
        this.user = JSON.parse(result);
        if(result){
          this.LoginDone = true;
        }else{
          this.LoginDone = false;
        }
        console.log('this.user',this.user);
      });
    })
    this.events.subscribe("logoutDone",()=>{
      console.log('logoutDone',);
      this.storage.get('cuserinfo').then(result => {
        this.user = JSON.parse(result);
        if(result){
          this.LoginDone = false;
        }else{
          this.LoginDone = true;
        }
        console.log('this.user',this.user);
      });
    })
  }
  ionViewDidLoad(){
		this.storage.get('cuserinfo').then(result => {
			this.user = JSON.parse(result);
      console.log('result',result);
      if(result){
        this.LoginDone = true;
      }else{
        this.LoginDone = false;
      }
		});
	}
}