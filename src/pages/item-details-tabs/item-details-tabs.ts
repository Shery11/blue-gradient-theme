import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IService } from '../../services/IService';


@IonicPage()
@Component({
  templateUrl: 'item-details-tabs.html'
})
export class ItemDetailsPageTabs {

  page: any;
  service: IService;
  params: any = {};

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.page = navParams.get('page');
    this.service = navParams.get('service');
    if (this.service) {
      this.params = this.service.prepareParams(this.page, navCtrl);
      if (this.params.tabsLayout1) {
        this.params.data = [
          { page: "TabPage1", icon: "ios-contact", title: "Contact" },
          { page: "TabPage2", icon: "ios-heart", title: "Favorite" },
          { page: "TabPage3", icon: "ios-settings", title: "Settings" },
          { page: "TabPage4", icon: "ios-send", title: "Send" },
          { page: "TabPage5", icon: "ios-trash", title: "Trash" }
        ];
      }

      if (this.params.tabsLayout2) {
        this.params.data = [
          { page: "TabPage6", icon: "ios-contact" },
          { page: "TabPage7", icon: "ios-heart" },
          { page: "TabPage8", icon: "ios-settings" },
          { page: "TabPage9", icon: "ios-send" },
          { page: "TabPage10", icon: "ios-trash" }
        ];
      }

      if (this.params.tabsLayout3) {
        this.params.subtitle = "Best models";
        this.params.description = "Who is your best model for 2017?";
        this.params.data = [
          { page: "TabPage11", title: "Contact" },
          { page: "TabPage12", title: "Send" },
          { page: "TabPage13", title: "Favorite" },
          { page: "TabPage14", title: "Settings" }
        ];
      }
    } else {
      navCtrl.setRoot("HomePage");
    }		
  }
}
