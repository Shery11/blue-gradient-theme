import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ToastService } from '../../services/toast-service';
import { TabsService } from '../../services/tabs-service';

@IonicPage()
@Component({
  templateUrl: 'tab-page-10.html',
  providers: [TabsService]
})
export class TabPage10 {
  params: any;

  constructor(private tabsService: TabsService, private toastCtrl: ToastService) {
    this.tabsService.load("tab10").subscribe(snapshot => {
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
    if (e) {
      e.stopPropagation();
    }
    this.toastCtrl.presentToast("Share");
  }
}
