import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../../app/apiconfig';

@Component({
  selector: 'page-picker',
  templateUrl: 'picker.html',
})

export class PickerPage {

  public skills: any = [];
  public subcat_id: object = [];
  public fee: any = 0.00;
  public ids: any = [];
  public names: any = [];
  public showLoader: boolean = true;

  constructor(public navCtrl: NavController, public navparams: NavParams, private http: HttpClient) {
  }

  ionViewDidLoad() {

    this.http.get(APIURL+'/admin14/sapi/v1/service-providers/skills').subscribe({
      next: (data) => {
        this.skills = data;
        this.showLoader = false;
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  ionViewDidEnter(){
    if(typeof this.navparams.get('ids') != 'undefined'){
      let ids = this.navparams.get('ids');
      for(var i = 0; i < ids.length; i++ ){
        this.subcat_id[ids[i]] = true;
      }
    }
  }

  updateSelected(obj){
  	if(this.subcat_id[obj.id] === true){
  		this.fee += parseFloat(obj.registration_cost);
  		this.ids.push(obj.id)
  		this.names.push(obj.name)
  	} else {
  		this.fee -= parseFloat(obj.registration_cost);
  		this.ids.splice(this.ids.indexOf(obj.id),1);
  		this.names.splice(this.names.indexOf(obj.name),1);
  	}
  }

  goBackWithSkills(){
  	this.navCtrl.getPrevious().data.ids = this.ids.join(', ');
  	this.navCtrl.getPrevious().data.names = this.names.join(', ');
  	this.navCtrl.pop()
  }

}
