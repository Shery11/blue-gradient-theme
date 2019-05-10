import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ToastService } from '../../services/toast-service';
import { TabsService } from '../../services/tabs-service';

@IonicPage()
@Component({
  templateUrl: 'tab-page-12.html',
  providers: [TabsService, ToastService]
})
export class TabPage12 {
  params: any;

  constructor(private tabsService: TabsService, private toastCtrl: ToastService) {
    this.tabsService.load("tab12").subscribe(snapshot => {
      this.params = snapshot;
    });
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.params = changes['data'].currentValue;
  }

  onItemClick(item:any) {
      this.toastCtrl.presentToast("Get");
  }
}
