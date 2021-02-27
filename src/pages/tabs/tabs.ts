import { Component } from '@angular/core';

import { AppointmentsPage } from '../appointments/appointments';
//import { NotificationPage } from '../notification/notification';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
//import { ChatsPage } from '../chats/chats';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  //tab2Root = NotificationPage;
  tab2Root = AppointmentsPage;
  tab3Root = AccountPage;
  //tab5Root = ChatsPage;

  constructor() {

  }
}