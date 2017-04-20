import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

ionViewWillEnter() {
    this.getWeapons();
}

d20Roll:number;
d20RollAttack:number;
damageRoll:number;
finalRoll:number;
finalAttack:number;
weaponDamage:number;

weapon1 = '';
weapon2 = '';
weapon3 = '';

  constructor(public navCtrl: NavController, public storage: Storage) {

  storage.ready().then(() => {




       });
  }

  getData(monkey) {

    // Or to get a key/value pair
      this.storage.get(monkey).then((data) => {
      this.d20Roll = Math.floor(Math.random() * 20) + 1;
      this.finalRoll = parseFloat(data) + this.d20Roll;
      });

  }

  getWeapons() {
    this.storage.get('myWeaponOne').then((data) => {
    this.weapon1 = data;
    });
    this.storage.get('myWeaponTwo').then((data) => {
    this.weapon2 = data;
    });
    this.storage.get('myWeaponThree').then((data) => {
    this.weapon3 = data;
    });

  }

  maulAttack(weaponKey) {
    this.storage.get(weaponKey).then((data) => {
    this.d20RollAttack = Math.floor(Math.random() * 20) + 1;
    this.finalAttack = parseFloat(data) + this.d20RollAttack;
    });

    if (this.d20RollAttack == 20) {
      this.storage.get(weaponKey).then((data) => {
      this.damageRoll = 0;
      this.damageRoll = Math.floor(Math.random() * 6) + 1;
      this.damageRoll += Math.floor(Math.random() * 6) + 1;
      this.damageRoll += Math.floor(Math.random() * 6) + 1;
      this.damageRoll += Math.floor(Math.random() * 6) + 1;
      this.damageRoll += parseFloat(data);
      this.weaponDamage = this.damageRoll;
      });
    } else {
      this.storage.get(weaponKey).then((data) => {
      this.damageRoll = 0;
      this.damageRoll = Math.floor(Math.random() * 6) + 1;
      this.damageRoll += Math.floor(Math.random() * 6) + 1;
      this.damageRoll += parseFloat(data);
      this.weaponDamage = this.damageRoll;
    });
    }
  }

  scimitarAttack(weaponKey) {
    this.storage.get(weaponKey).then((data) => {
    this.d20RollAttack = Math.floor(Math.random() * 20) + 1;
    this.finalAttack = parseFloat(data) + this.d20RollAttack;
    });

    if (this.d20RollAttack == 20) {
    this.storage.get(weaponKey).then((data) => {
    this.damageRoll = 0;
    this.damageRoll = Math.floor(Math.random() * 8) + 1;
    this.damageRoll += Math.floor(Math.random() * 8) + 1;
    this.damageRoll += parseFloat(data);
    this.weaponDamage = this.damageRoll;
  });
    } else {
    this.storage.get(weaponKey).then((data) => {
    this.damageRoll = 0;
    this.damageRoll = Math.floor(Math.random() * 8) + 1;
    this.damageRoll += parseFloat(data);
    this.weaponDamage = this.damageRoll;
  });
    }
  }

  crossbowAttack(weaponKey) {
    this.storage.get(weaponKey).then((data) => {
    this.d20RollAttack = Math.floor(Math.random() * 20) + 1;
    this.finalAttack = parseFloat(data) + this.d20RollAttack;
    });

    if (this.d20RollAttack == 20) {
    this.storage.get(weaponKey).then((data) => {
    this.damageRoll = 0;
    this.damageRoll = Math.floor(Math.random() * 10) + 1;
    this.damageRoll += Math.floor(Math.random() * 10) + 1;
    this.damageRoll += parseFloat(data);
    this.weaponDamage = this.damageRoll;
  });
    } else {
    this.storage.get(weaponKey).then((data) => {
    this.damageRoll = 0;
    this.damageRoll = Math.floor(Math.random() * 10) + 1;
    this.damageRoll += parseFloat(data);
    this.weaponDamage = this.damageRoll;
  });
    }
  }

}
