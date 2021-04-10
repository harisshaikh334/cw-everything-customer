import { Component, ViewChild } from '@angular/core';
import { Events, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { LanguagPage } from '../pages/languag/languag';
import { SigninPage } from '../pages/signin/signin';
import { TranslateService } from '../../node_modules/@ngx-translate/core';
import { CartDetailsPage } from '../pages/cart-details/cart-details';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp { 
  rootPage:any = TabsPage;
  cart_count_number:number = 0;
  @ViewChild('nav') nav: NavController;

 constructor(private platform: Platform, private statusBar: StatusBar,
  private splashScreen: SplashScreen, public translate:TranslateService,public events: Events) {
    this.initializeApp();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {

      this.nav.viewDidLoad.subscribe((page) => {
        console.log('page is ', page);
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.setDefaultLang('en');
      this.translate.use('en');

      this.events.subscribe('add_to_cart', (cart_count) => {
        console.log('cart count ', cart_count);
        // user and time are the same arguments passed in `events.publish(user, time)`
        this.cart_count_number = cart_count;  
      });

      
    });
  }

  goToCartDetails() {
    this.nav.push(CartDetailsPage);
  }
}
 