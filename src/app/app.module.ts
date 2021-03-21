import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DatePipe } from '@angular/common';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicImageLoader } from 'ionic-image-loader';
import * as ionicGalleryModal from 'ionic-gallery-modal';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Diagnostic } from '@ionic-native/diagnostic';
import { SocialSharing } from '@ionic-native/social-sharing';

import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { Appointment_statusPage } from '../pages/appointment_status/appointment_status';
import { AppointmentsPage } from '../pages/appointments/appointments';
import { Book_appointmentPage } from '../pages/book_appointment/book_appointment';
import { CategoryPage } from '../pages/category/category';
import { ChatsPage } from '../pages/chats/chats';
import { ContactPage } from '../pages/contact/contact';
import { ConversationPage } from '../pages/conversation/conversation';
import { FaqPage } from '../pages/faq/faq';
import { ForgotPage } from '../pages/forgot/forgot';
import { HomePage } from '../pages/home/home';
import { PickerPage } from '../pages/picker/picker';
import { LanguagPage } from '../pages/languag/languag';
import { List_of_plumberPage } from '../pages/list_of_plumber/list_of_plumber';
import { My_addressesPage } from '../pages/my_addresses/my_addresses';
import { My_profilePage } from '../pages/my_profile/my_profile';
import { NotificationPage } from '../pages/notification/notification';
import { CartQuantity, Plumber_profilePage } from '../pages/plumber_profile/plumber_profile';
import { ReviewPage } from '../pages/review/review';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { AddAddressPage } from '../pages/add-address/add-address';
import { OrderRatingPage } from '../pages/order-rating/order-rating';
import { PopoverPage } from '../pages/popover/popover';
import { DatePicker } from '@ionic-native/date-picker';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from '@ionic-native/firebase';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { StarRatingModule } from 'ionic3-star-rating';
import { CartDetailsPage } from '../pages/cart-details/cart-details';
import { OrderHostoryPage } from '../pages/order-hostory/order-hostory';
import { OrderDetailsPage } from '../pages/order-details/order-details';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AccountPage,
    Appointment_statusPage,
    AppointmentsPage,
    Book_appointmentPage,
    CategoryPage,
    ChatsPage,
    ContactPage,
    ConversationPage,
    FaqPage,
    ForgotPage,
    HomePage,
    LanguagPage,
    List_of_plumberPage,
    My_addressesPage,
    My_profilePage,
    NotificationPage,
    Plumber_profilePage,
    ReviewPage,
    SigninPage,
    PickerPage,
    SignupPage,
    TabsPage,
    AddAddressPage,
    OrderRatingPage,
    CartDetailsPage,
    CartQuantity,
    OrderHostoryPage,
    OrderDetailsPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicImageLoader.forRoot(),
    ionicGalleryModal.GalleryModalModule,
    StarRatingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AccountPage,
    Appointment_statusPage,
    AppointmentsPage,
    Book_appointmentPage,
    CategoryPage,
    ChatsPage,
    ContactPage,
    ConversationPage,
    FaqPage,
    ForgotPage,
    HomePage,
    LanguagPage,
    List_of_plumberPage,
    My_addressesPage,
    My_profilePage,
    NotificationPage,
    Plumber_profilePage,
    ReviewPage,
    SigninPage,
    SignupPage,
    TabsPage,
    AddAddressPage,
    OrderRatingPage,
    CartDetailsPage,
    CartQuantity,
    OrderHostoryPage,
    OrderDetailsPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    SocialSharing,
    DatePipe,
    Diagnostic,
    DatePicker,
    Firebase,
    LocationAccuracy,
    ionicGalleryModal.GalleryModalHammerConfig,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
