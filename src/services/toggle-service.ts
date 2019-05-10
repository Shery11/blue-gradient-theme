import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class ToggleService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'toggle';

    getTitle = (): string => 'Toggle';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "With avatars", "theme"  : "layout1"},
          {"title" : "Simple 2", "theme"  : "layout2"},
          {"title" : "Simple", "theme"  : "layout3"},
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    // TOGGLE - With avatars data
    getDataForLayout1 = (): any => {
        return {
            "title": "With avatars",
            "items": [
                {
                    "id": 0,
                    "title": "Theresa Mason",
                    "subtitle": "theresa.mason@email",
                    "isChecked": false,
                    "avatar": "assets/images/avatar/24.jpg"
                },
                {
                    "id": 1,
                    "title": "Laetitia Duhamel",
                    "subtitle": "laetitia.duhamel@email",
                    "isChecked": false,
                    "avatar": "assets/images/avatar/10.jpg"
                },
                {
                    "id": 2,
                    "title": "Marine Aubry",
                    "subtitle": "marine.aubry@email",
                    "isChecked": false,
                    "avatar": "assets/images/avatar/11.jpg"
                },
                {
                    "id": 3,
                    "title": "Samantha Kennedy",
                    "subtitle": "samantha.kennedy@email",
                    "isChecked": false,
                    "avatar": "assets/images/avatar/12.jpg"
                },
                {
                    "id": 4,
                    "title": "Juliette Blondel",
                    "subtitle": "juliette.blondel@email",
                    "isChecked": false,
                    "avatar": "assets/images/avatar/13.jpg"
                },
                {
                    "id": 5,
                    "title": "Isabelle Pascal",
                    "subtitle": "isabelle.pascal@email",
                    "isChecked": false,
                    "avatar": "assets/images/avatar/14.jpg"
                },
                {
                    "id": 6,
                    "title": "Valentine Roy",
                    "subtitle": "valentine.roy@email",
                    "isChecked": false,
                    "avatar": "assets/images/avatar/15.jpg"
                },
                {
                    "id": 7,
                    "title": "Alice Kelly",
                    "subtitle": "alice.kelly@emai",
                    "isChecked": false,
                    "avatar": "assets/images/avatar/16.jpg"
                },
                {
                    "id": 8,
                    "title": "Caitlin Wilkinson",
                    "subtitle": "caitlin.wilkinson@email",
                    "isChecked": false,
                    "avatar": "assets/images/avatar/17.jpg"
                },
                {
                    "id": 9,
                    "title": "Camille Garnier",
                    "subtitle": "camille.garnier@email",
                    "isChecked": false,
                    "avatar": "assets/images/avatar/18.jpg"
                },
                {
                    "id": 10,
                    "title": "Suzanne Petit",
                    "subtitle": "suzanne.petit@email",
                    "isChecked": false,
                    "avatar": "assets/images/avatar/19.jpg"
                },
                {
                    "id": 11,
                    "title": "Stacey Harris",
                    "subtitle": "stacey.harris@email",
                    "isChecked": false,
                    "avatar": "assets/images/avatar/20.jpg"
                },
                {
                    "id": 12,
                    "title": "Jamie Clark",
                    "subtitle": "jamie.clark@email",
                    "isChecked": false,
                    "avatar": "assets/images/avatar/21.jpg"
                }
            ]
        };
    };

    // TOGGLE - Simple 2 data
    getDataForLayout2 = (): any => {
        return {
            "title": "Simple 2",
            "items": [
                {
                    "id": 1,
                    "title": "bilic@yahoo.com",
                    "subtitle": "Daniel",
                    "isChecked": true
                },
                {
                    "id": 2,
                    "title": "roussel@yahoo.com",
                    "subtitle": "Manon",
                    "isChecked": false
                },
                {
                    "id": 4,
                    "title": "chevallier@mail.com",
                    "subtitle": "Antoine",
                    "isChecked": false
                },
                {
                    "id": 3,
                    "title": "laurent@gmail.com",
                    "subtitle": "Michel",
                    "isChecked": false
                },
                {
                    "id": 5,
                    "title": "delahaye@outlook.com",
                    "subtitle": "Laurence",
                    "isChecked": false
                },
                {
                    "id": 6,
                    "title": "valentin@mail.com",
                    "subtitle": "Pénélope",
                    "isChecked": true
                },
                {
                    "id": 7,
                    "title": "hebert@mail.com",
                    "subtitle": "Adèle",
                    "isChecked": false
                },
                {
                    "id": 8,
                    "title": "delattre@yahoo.com",
                    "subtitle": "Monique",
                    "isChecked": false
                },
                {
                    "id": 9,
                    "title": "mahe@mail.com",
                    "subtitle": "Charles",
                    "isChecked": false
                }
            ]
        };
    };

    // TOGGLE - Simple data
    getDataForLayout3 = (): any => {
        return {
            "title": "Simple",
            "items": [
                {
                    "id": 0,
                    "title": "United Kingdom",
                    "isChecked": true
                },
                {
                    "id": 1,
                    "title": "South Africa",
                    "isChecked": false
                },
                {
                    "id": 2,
                    "title": "Qatar",
                    "isChecked": false
                },
                {
                    "id": 3,
                    "title": "Philippines",
                    "isChecked": false
                },
                {
                    "id": 4,
                    "title": "New Zealand",
                    "isChecked": true
                },
                {
                    "id": 5,
                    "title": "Mongolia",
                    "isChecked": true
                },
                {
                    "id": 6,
                    "title": "Luxembourg",
                    "isChecked": true
                },
                {
                    "id": 7,
                    "title": "Jamaica",
                    "isChecked": false
                },
                {
                    "id": 8,
                    "title": "India",
                    "isChecked": false
                },
                {
                    "id": 9,
                    "title": "Grenada",
                    "isChecked": false
                },
                {
                    "id": 10,
                    "title": "France",
                    "isChecked": false
                },
                {
                    "id": 11,
                    "title": "Ecuador",
                    "isChecked": false
                },
                {
                    "id": 12,
                    "title": "Argentina",
                    "isChecked": false
                }
            ]
        };
    };

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onSelect': function (item: any) {
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
    };

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('toggle/' + item.theme)
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
