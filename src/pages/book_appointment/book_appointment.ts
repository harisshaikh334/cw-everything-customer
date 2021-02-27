import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../app/apiconfig';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-book_appointment',
  templateUrl: 'book_appointment.html'
})
export class Book_appointmentPage {
	select_address_type: string = '';
	select_address: string = '';
	details: any = {}
 	address: any = []
 	showLoader: boolean = true;
 	user: any = {}
 	date: any = new Date();
 	service_date: string = '';

	constructor(public navCtrl: NavController, private datePicker: DatePicker, private datepipe: DatePipe, public toast: ToastController, public storage: Storage, public navparams: NavParams, private http: HttpClient) {
		let newdate = new Date();
		if(newdate.getHours() > 20){
			newdate.setDate(newdate.getDate()+1);
		}
		newdate.setMinutes(newdate.getMinutes() + 30);
 		this.service_date = this.datepipe.transform(newdate, 'd MMM, y h:mm a');
	}

	ionViewDidLoad(){
		let order_id = this.navparams.get('order_id');
		this.storage.get('cuserinfo').then(result => {
	        this.user = JSON.parse(result);
			this.http.get<any>(APIURL+'orders/booking-pre-details?id='+order_id+'&access-token='+this.user.token)
			.subscribe({
				next: response => {
					this.showLoader = false;
					this.details = response.details;
					this.address = response.address;
					this.select_address_type = this.address[0].address_type;
					this.select_address = this.address[0].address;
				},
				error: err => {
					this.showLoader = false;
				}
			})
		})
	}

	openDatePicker(){
		let d = new Date();
		d.setMonth(d.getMonth() + 3);

		this.datePicker.show({
		  date: new Date(),
		  mode: 'datetime',
		  titleText: 'Service Schedule',
		  minDate: new Date().getTime(),
		  maxDate: d.getTime(),
		  minuteInterval: 30,
		  androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
		}).then(
		  date => {
		  	console.log('Got date: ', date)
		  	this.service_date = this.datepipe.transform(date, 'd MMM, y h:mm a');
		  },
		  err => console.log('Error occurred while getting date: ', err)
		);
	}

	getDate(num){
		let d = new Date();
		if(new Date().getHours() > 20){
			num++;
		}
		d.setDate(d.getDate()+num);
		return d;
	}

	getHour(i){
		let hour = 1+parseInt(i);
		return (hour < 12) ? hour+":00 AM" : (hour == 12) ? hour+":00 PM" : (hour == 24) ? '12:00 AM' : (hour-12)+":00 PM";
	}

	arrayOne(num){
		return Array(num);
	}

	checkDisabledTime(num){
		let sd :number = parseInt(this.service_date.split('-').pop());
		return (sd == new Date().getDate() && new Date().getHours() >= (1+num)) ? 'true' : 'false';
	}

	setAddress(){
		let obj = this.address.find((elem) => {return elem.address_type == this.select_address_type;});
		this.select_address = obj.address;
	}

	book(){
		let d = new Date();
		let qdate = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();

		let nd = new Date(this.service_date);
		if(nd.getTime() < new Date().getTime()){
			alert('Service Schedule Time should be greater than current time.');
			return false;
		}

 		let ssdt = this.datepipe.transform(nd, 'y-MM-d HH:mm:ss');

		let putdata = {status: 'Scheduled', quotation_approved: 'Y', quotation_approved_date: qdate, service_address: this.select_address, service_schedule: ssdt}
	    this.showLoader = true;
      	
      	//hitting api
      	this.showLoader = true;
        this.http.put(APIURL+'orders/'+this.navparams.get('order_id')+'?access-token='+this.user.token, putdata)
        .subscribe({
          next: response => {
            this.showLoader = false;
            this.navCtrl.getPrevious().data.popped = 1;
            this.navCtrl.pop();
          },
          error: err => {
            this.showLoader = false;
            console.log(err)
          }
        })
	} 

	onImageLoad(e){
		e.classList.add('visible')
	  	e.classList.remove('invisible')
	}

}
