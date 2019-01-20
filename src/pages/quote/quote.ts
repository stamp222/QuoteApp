import { Component } from '@angular/core';
import {NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
    console.log('ionViewDidLoad QuotePage');
  }
  
  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }

 
}
