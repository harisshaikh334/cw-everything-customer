import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { APIURL } from '../../app/apiconfig';
import { HttpClient } from '@angular/common/http';
import { List_of_plumberPage } from '../list_of_plumber/list_of_plumber';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

	public user: any = {};
	public subcat: any = [];
	public category: string = "";
	public showLoader: boolean = false;

	constructor(public navCtrl: NavController, public storage: Storage, private http: HttpClient, private navparams: NavParams) {

	}

	ionViewDidLoad(){
		let cat_id = this.navparams.get('id');
		this.category = this.navparams.get('category');
		this.storage.get('cuserinfo').then(result => {
			this.user = JSON.parse(result);
			this.showLoader = true;
			if(this.navparams.get('q')){
				this.getItems(this.navparams.get('q'));
			} else {
				this.http.get(APIURL+'subcategories?where[category_id]='+cat_id).subscribe({
			        next: response => {
			        	this.showLoader = false;
			        	this.subcat = response;
			        },
			        error: err => {
			          console.error(err);
			        }
			    });
			}
		});
	}

	getItems(term){
		this.http.get(APIURL+'subcategories?where[search]='+term).subscribe({
	        next: response => {
	        	this.category = term;
	        	this.showLoader = false;
	        	this.subcat = response;
	        },
	        error: err => {
	          this.showLoader = false;	
	          console.error(err);
	        }
	    });
	}

	list_of_plumber(id, subcat){
	    this.navCtrl.push(List_of_plumberPage,{subcat: subcat, subcat_id: id})
	} 
}
