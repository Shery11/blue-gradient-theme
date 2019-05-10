import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage11 } from './tab-page-11';

@NgModule({
    declarations: [
        TabPage11,
    ],
    imports: [
        IonicPageModule.forChild(TabPage11),
    ],
    exports:[
        TabPage11
    ]
})

export class TabPage11Module { }
