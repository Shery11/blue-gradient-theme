import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubImageGalleryLayout1 } from './sub-image-gallery-layout-1';

@NgModule({
    declarations: [
        SubImageGalleryLayout1,
    ],
    imports: [
        IonicPageModule.forChild(SubImageGalleryLayout1),
    ],
    exports: [
        SubImageGalleryLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SubImageGalleryLayout1Module { }
