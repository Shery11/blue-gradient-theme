import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { AppSettings } from '../../services/app-settings'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {
  
  data:any = {};

  constructor(public navCtrl: NavController, public service:HomeService, public modalCtrl: ModalController) {
    service.load().subscribe(snapshot => {
      this.data = snapshot;
    });

     if (AppSettings.SHOW_START_WIZARD) {
      this.presentProfileModal();
    }
  }

   presentProfileModal() {
    const profileModal = this.modalCtrl.create("IntroPage");
    profileModal.present();
  }

}
