import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class RadioButtonService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'radioButton';

    getTitle = (): string => 'Radio Button';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Simple", "theme"  : "layout1"},
          {"title" : "With avatars", "theme"  : "layout2"},
          {"title" : "Simple 2", "theme"  : "layout3"}
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    // RADION BUTTON - Simple data
    getDataForLayout1 = (): any => {
        return {
            "title" : "Your country",
            "selectedItem": 3,
            "items" : [
              {"id" : 1, "title": "The Gambia"},
              {"id" : 2, "title": "Ecuador"},
              {"id" : 4, "title": "Czechia"},
              {"id" : 3, "title": "Brunei"},
              {"id" : 5, "title": "Madagascar"},
              {"id" : 6, "title": "Kuwait"},
              {"id" : 7, "title": "Liechtenstein"},
              {"id" : 8, "title": "Kiribati"},
              {"id" : 9, "title": "Hungary"},
              {"id" : 10, "title": "Fiji"},
              {"id" : 11, "title": "Serbia"},
              {"id" : 12, "title": "Saint Lucia"},
              {"id" : 13, "title": "Portugal"}
            ]
          };
    };

    // RADION BUTTON - With avatars data
    getDataForLayout2 = (): any => {
        return {
            "title" : "Following",
            "selectedItem": 4,
            "items" : [
              {"id" : 1, "title": "Tara Saunders", "subtitle": "@tara333", "avatar": "assets/images/avatar/24.jpg"},
              {"id" : 2, "title": "Daniel Perrin", "subtitle": "@daniel", "avatar": "assets/images/avatar/23.jpg"},
              {"id" : 4, "title": "Jackson Phillips", "subtitle": "@jackson", "avatar": "assets/images/avatar/22.jpg"},
              {"id" : 3, "title": "Antoine Chevallier", "subtitle": "@antoine", "avatar": "assets/images/avatar/21.jpg"},
              {"id" : 5, "title": "Jessica White", "subtitle": "@jessica", "avatar": "assets/images/avatar/20.jpg"},
              {"id" : 6, "title": "Laetitia Duhamel", "subtitle": "@laetitia", "avatar": "assets/images/avatar/19.jpg"},
              {"id" : 7, "title": "Sylvie Rey", "subtitle": "@sylvie", "avatar": "assets/images/avatar/18.jpg"},
              {"id" : 8, "title": "Julie Lewis", "subtitle": "@julie44", "avatar": "assets/images/avatar/17.jpg"},
              {"id" : 9, "title": "Layla Chapman", "subtitle": "@layla", "avatar": "assets/images/avatar/16.jpg"},
              {"id" : 10, "title": "Charlotte Pelletier", "subtitle": "@charlotte", "avatar": "assets/images/avatar/15.jpg"}
            ]
          };
    };

    // RADION BUTTON - Simple 2 data
    getDataForLayout3 = (): any => {
        return {
            "title" : "Loctions",
            "selectedItem": 4,
            "items" : [
              {"id" : 1, "title": "New York City", "subtitle": "United States"},
              {"id" : 2, "title": "Paris", "subtitle": "France"},
              {"id" : 4, "title": "Istanbul", "subtitle": "Turkey"},
              {"id" : 3, "title": "Tokyo", "subtitle": "‎Japan"},
              {"id" : 5, "title": "Moscow", "subtitle": "Russia"},
              {"id" : 6, "title": "Mexico City", "subtitle": "Mexico"},
              {"id" : 7, "title": "Rio de Janeiro", "subtitle": "Brazil"},
              {"id" : 8, "title": "Berlin", "subtitle": "Germany"},
              {"id" : 9, "title": "Madrid", "subtitle": "Spain"},
              {"id" : 10, "title": "London", "subtitle": "United Kingdom"},
              {"id" : 11, "title": "Shanghai", "subtitle": "China"},
              {"id" : 12, "title": "Seoul", "subtitle": "South Korea"},
              {"id" : 13, "title": "Cairo", "subtitle": "Egypt"}
            ]
          };
    };

     getEventsForTheme = (menuItem: any): any => {
       var that = this;
        return {
            'onSelect': function(item: any) {
                  that.toastCtrl.presentToast(item.title);
            },
        };
    };

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: [],
            events: this.getEventsForTheme(item)
        };
        result[this.getShowItemId(item)] = true;
        return result;
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    }

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('radioButton/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        that.loadingService.hide();
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
}
