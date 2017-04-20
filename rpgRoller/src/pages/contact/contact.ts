import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

ionViewWillEnter() {
    this.getData();
}

  nameCharacter = '';
  scoreStr:number;
  scoreDex:number;
  scoreCon:number;
  scoreInt:number;
  scoreWis:number;
  scoreCha:number;

  weapon1 = '';
  weapon2 = '';
  weapon3 = '';



  constructor(public navCtrl: NavController, public storage: Storage) {

  storage.ready().then(() => {




       });
  }

  getData() {
    // Or to get a key/value pair
      this.storage.get('myName').then((data) => {
      this.nameCharacter = data;
      })
      this.storage.get('myStr').then((data) => {
      this.scoreStr = parseFloat(data);
      })
      this.storage.get('myDex').then((data) => {
      this.scoreDex = parseFloat(data);
      })
      this.storage.get('myCon').then((data) => {
      this.scoreCon = parseFloat(data);
      })
      this.storage.get('myInt').then((data) => {
      this.scoreInt = parseFloat(data);
      })
      this.storage.get('myWis').then((data) => {
      this.scoreWis = parseFloat(data);
      })
      this.storage.get('myCha').then((data) => {
      this.scoreCha = parseFloat(data);
      })
      this.storage.get('myWeaponOne').then((data) => {
      this.weapon1 = data;
      })
      this.storage.get('myWeaponTwo').then((data) => {
      this.weapon2 = data;
      })
      this.storage.get('myWeaponThree').then((data) => {
      this.weapon3 = data;
      })
  }

  setData(key, value) {
    // set a key/value
    this.storage.set('myName', this.nameCharacter);
    this.storage.set('myStr', this.scoreStr);
    this.storage.set('myDex', this.scoreDex);
    this.storage.set('myCon', this.scoreCon);
    this.storage.set('myInt', this.scoreInt);
    this.storage.set('myWis', this.scoreWis);
    this.storage.set('myCha', this.scoreCha);
    this.storage.set('myWeaponOne', this.weapon1);
    this.storage.set('myWeaponTwo', this.weapon2);
    this.storage.set('myWeaponThree', this.weapon3);
  }

}
