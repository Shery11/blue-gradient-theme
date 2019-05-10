import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';

@Injectable()
export class MenuService implements IService {

  constructor(public af: AngularFireDatabase) {}

    getId = ():string => 'menu';

    getTitle = ():string => 'UIAppTemplate';

    getAllThemes = (): Array<any> => {
      return [
        {"title" : "List Views", "theme"  : "listViews",  "icon" : "ios-list-box-outline", "listView" : true, "component": "", "singlePage":false},
        {"title" : "Parallax", "theme"  : "parallax",  "icon" : "ios-albums-outline", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Login Pages", "theme"  : "login",  "icon" : "ios-lock-outline", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Register Pages", "theme"  : "register",  "icon" : "ios-contact-outline", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Image Gallery", "theme"  : "imageGallery",  "icon" : "ios-apps-outline", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Splash Screen", "theme"  : "splashScreens",  "icon" : "ios-exit-outline", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Check Boxs", "theme"  : "checkBoxes",  "icon" : "ios-checkmark-circle-outline", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Search Bars", "theme"  : "searchBars",  "icon" : "ios-search-outline", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Typo + small components", "theme"  : "textViews",  "icon" : "ios-create-outline", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Onboarding / Wizards", "theme"  : "wizard",  "icon" : "ios-tablet-portrait-outline", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Spinner", "theme"  : "spinner",  "icon" : "ios-refresh-circle-outline", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Tabs", "theme"  : "tabs",  "icon" : "ios-photos-outline", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Maps", "theme"  : "maps",  "icon" : "ios-map-outline", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Radio Button", "theme"  : "radioButton",  "icon" : "ios-radio-button-on-outline", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Range", "theme"  : "range",  "icon" : "ios-options-outline", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Toggle", "theme"  : "toggle",  "icon" : "ios-switch-outline", "listView" : false, "component":"", "singlePage":false},
        {"title" : "Select", "theme"  : "select",  "icon" : "ios-arrow-dropdown-outline", "listView" : true, "component":"", "singlePage":false},
        {"title" : "Action Sheet", "theme"  : "actionSheet",  "icon" : "ios-more-outline", "listView" : false, "component":"", "singlePage":false}
      ];
    };

    getDataForTheme = () => {
      return {
        "background": "assets/images/background/39.jpg",
        "image": "assets/images/logo/2.png",
        "title": "Ionic 3 / Angular 6 UI Theme / Template App - Multipurpose Starter App - Gradient Blue Light"
      };
    };

    getEventsForTheme = (menuItem: any): any => {
      return {};
    };

    prepareParams = (item: any) => {
      return {
        title: item.title,
        data: {},
        events: this.getEventsForTheme(item)
      };
    };

    load(item: any): Observable<any> {
      if (AppSettings.IS_FIREBASE_ENABLED) {
        return new Observable(observer => {
          this.af
            .object('menu')
            .valueChanges()
            .subscribe(snapshot => {
              observer.next(snapshot);
              observer.complete();
            }, err => {
              observer.error([]);
              observer.complete();
            });
        });
      } else {
        return new Observable(observer => {
          observer.next(this.getDataForTheme());
          observer.complete();
        });
      }
    }
}
