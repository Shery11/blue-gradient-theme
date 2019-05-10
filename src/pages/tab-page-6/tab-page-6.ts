import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ToastService } from '../../services/toast-service';
import { TabsService } from '../../services/tabs-service';
import { debug } from 'util';

@IonicPage()
@Component({
  templateUrl: 'tab-page-6.html',
  providers: [TabsService]
})
export class TabPage6 {
  params: any;

  constructor(private tabsService: TabsService, private toastCtrl: ToastService) {
    this.tabsService.load("tab6").subscribe(snapshot => {
      this.params = snapshot;
    });
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.params = changes['data'].currentValue;
  }

  onItemClick(item:any, e:any) {
    if (e) {
      e.stopPropagation();
    }
    this.toastCtrl.presentToast(item.title);
  }

  onBuy(e:any) {
    if (e) {
      e.stopPropagation();
    }
    this.toastCtrl.presentToast("Buy");
  }

  onShare(item:any, e:any) {
    debugger;
    if (e) {
      e.stopPropagation();
    }
    this.toastCtrl.presentToast("Share");
  }
}
