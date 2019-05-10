import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageSubImageGallery } from './item-details-sub-image-gallery';

import { SubImageGalleryLayout1Module } from '../../components/sub-image-gallery/layout-1/sub-image-gallery-layout-1.module';
import { SubImageGalleryLayout2Module } from '../../components/sub-image-gallery/layout-2/sub-image-gallery-layout-2.module';

@NgModule({
  declarations: [
    ItemDetailsPageSubImageGallery,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageSubImageGallery),
    SubImageGalleryLayout1Module, SubImageGalleryLayout2Module
  ],
  exports: [
    ItemDetailsPageSubImageGallery
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageSubImageGalleryModule {}
