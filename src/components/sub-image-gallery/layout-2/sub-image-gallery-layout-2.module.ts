import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubImageGalleryLayout2 } from './sub-image-gallery-layout-2';

@NgModule({
    declarations: [
        SubImageGalleryLayout2,
    ],
    imports: [
        IonicPageModule.forChild(SubImageGalleryLayout2),
    ],
    exports: [
        SubImageGalleryLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SubImageGalleryLayout2Module { }
