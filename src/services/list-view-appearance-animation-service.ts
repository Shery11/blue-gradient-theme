import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'


@Injectable()
export class ListViewAppearanceAnimationService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'appearanceAnimations';

    getTitle = (): string => 'Appearance animations';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Fade in left", "theme"  : "layout1"},
          {"title" : "Fade in right", "theme"  : "layout2"},
          {"title" : "Fade in down", "theme"  : "layout3"},
          {"title" : "Fade in", "theme"  : "layout4"},
          {"title" : "Zoom in", "theme"  : "layout5"}
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return this.getAnimationData();
    };

    // APPEARANCE ANIMATIONS - Fade in left, Fade in right, Fade in down, Fade in, Zoom in
    getAnimationData = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "title": "Theresa Mason",
                    "image": "assets/images/avatar/24.jpg",
                    "favorite": true
                },
                {
                    "id": 2,
                    "title": "Lucas Schultz",
                    "image": "assets/images/avatar/23.jpg",
                    "favorite": false
                },
                {
                    "id": 3,
                    "title": "Ray Clarke",
                    "image": "assets/images/avatar/22.jpg",
                    "favorite": true
                },
                {
                    "id": 4,
                    "title": "Dimitri Abernathy",
                    "image": "assets/images/avatar/21.jpg",
                    "favorite": false
                },
                {
                    "id": 5,
                    "title": "Rosie Harrison",
                    "image": "assets/images/avatar/20.jpg",
                    "favorite": false
                },
                {
                    "id": 6,
                    "title": "Camila Hintz",
                    "image": "assets/images/avatar/19.jpg",
                    "favorite": true
                },
                {
                    "id": 7,
                    "title": "Ines Daniel",
                    "image": "assets/images/avatar/18.jpg",
                    "favorite": false
                },
                {
                    "id": 8,
                    "title": "Fiona Edwards",
                    "image": "assets/images/avatar/16.jpg",
                    "favorite": true
                },
                {
                    "id": 9,
                    "title": "Ella Emmerich",
                    "image": "assets/images/avatar/15.jpg",
                    "favorite": true
                },
                {
                    "id": 10,
                    "title": "Elisa Schroeder",
                    "image": "assets/images/avatar/14.jpg",
                    "favorite": true
                },
                {
                    "id": 11,
                    "title": "Naomi Mante",
                    "image": "assets/images/avatar/13.jpg",
                    "favorite": false
                },
                {
                    "id": 12,
                    "title": "Olivia Stevens",
                    "image": "assets/images/avatar/12.jpg",
                    "favorite": false
                },
                {
                    "id": 13,
                    "title": "Salma Bayer",
                    "image": "assets/images/avatar/11.jpg",
                    "favorite": false
                },
                {
                    "id": 14,
                    "title": "Eldora Mills",
                    "image": "assets/images/avatar/10.jpg",
                    "favorite": false
                },
                {
                    "id": 15,
                    "title": "Ella Richardson",
                    "image": "assets/images/avatar/24.jpg",
                    "favorite": false
                },
                {
                    "id": 16,
                    "title": "Jennifer Reid",
                    "image": "assets/images/avatar/17.jpg",
                    "favorite": false
                }
            ]
        };
    };

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onItemClick': function(item: any) {
                  that.toastCtrl.presentToast(item.title);
            },
            'onFavorite': function(item) {
                item.favorite = !item.favorite;
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
                    .object('listView/appearanceAnimations/' + item.theme)
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
