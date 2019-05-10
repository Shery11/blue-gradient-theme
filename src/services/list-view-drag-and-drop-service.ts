import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class ListViewDragAndDropService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'dragAndDrop';

    getTitle = (): string => 'Drag and Drop';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Small item + header", "theme"  : "layout1"},
          {"title" : "Products + CTA header", "theme"  : "layout2"},
          {"title" : "Medium item with avatar", "theme"  : "layout3"}
        ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    // DRAGEN AND DROP - Small item + header data
    getDataForLayout1 = (): any => {
        return {
            "header": "Restaurants",
            "items": [
                {
                    "id": 1,
                    "title": "Rainforest Cafe",
                    "subtitle": "New York City",
                    "textIcon": "7186 km"
                },
                {
                    "id": 2,
                    "title": "Big Boy",
                    "subtitle": "Los Angeles",
                    "textIcon": "2281 km"
                },
                {
                    "id": 3,
                    "title": "California Pizza Kitchen",
                    "subtitle": "Beijing",
                    "textIcon": "1748 km"
                },
                {
                    "id": 4,
                    "title": "Cheese Burger in Paradise",
                    "subtitle": "Delhi",
                    "textIcon": "3450 km"
                },
                {
                    "id": 5,
                    "title": "T.G.I. Friday's",
                    "subtitle": "Shanghai",
                    "textIcon": "7374 km"
                },
                {
                    "id": 6,
                    "title": "Heart Attack Grill",
                    "subtitle": "Paris",
                    "textIcon": "6070 km"
                },
                {
                    "id": 7,
                    "title": "Heart Attack Grill",
                    "subtitle": "Istanbul",
                    "textIcon": "8158 km"
                },
                {
                    "id": 8,
                    "title": "Dick's Last Resort",
                    "subtitle": "Tokyo",
                    "textIcon": "292 km"
                },
                {
                    "id": 9,
                    "title": "Steak 'n Shake",
                    "subtitle": "Guangzhou",
                    "textIcon": "9231 km"
                },
                {
                    "id": 10,
                    "title": "Bluepoint Sage Cafe",
                    "subtitle": "Mumbai",
                    "textIcon": "9972 km"
                },
                {
                    "id": 11,
                    "title": "Ground Round",
                    "subtitle": "Moscow",
                    "textIcon": "9720 km"
                },
                {
                    "id": 12,
                    "title": "Waffle House",
                    "subtitle": "São Paulo",
                    "textIcon": "988 km"
                },
                {
                    "id": 13,
                    "title": "Quaker Steak & Lube",
                    "subtitle": "Shenzhen",
                    "textIcon": "1000 km"
                },
                {
                    "id": 14,
                    "title": "Boston Pizza",
                    "subtitle": "Boston",
                    "textIcon": "2565 km"
                }
            ]
        };
    };

    // DRAGEN AND DROP - Products + CTA header data
    getDataForLayout2 = (): any => {
        return {
            "header": "Cart",
            "title": "Make order now!",
            "subtitle": "Reorder list by your wish.",
            "button": "Get",
            "items": [
                {
                    "id": 1,
                    "title": "Keyboard",
                    "subtitle": "20% Off",
                    "image": "assets/images/avatar/2.jpg",
                    "price": "$199.99"
                },
                {
                    "id": 2,
                    "title": "Headphones",
                    "subtitle": "15% Off",
                    "image": "assets/images/avatar/3.jpg",
                    "price": "$295.99"
                },
                {
                    "id": 3,
                    "title": "Watch",
                    "subtitle": "22% Off",
                    "image": "assets/images/avatar/6.jpg",
                    "price": "$1032.99"
                },
                {
                    "id": 4,
                    "title": "Dualshock controller",
                    "subtitle": "10% Off",
                    "image": "assets/images/avatar/0.jpg",
                    "price": "$1269.99"
                },
                {
                    "id": 5,
                    "title": "Canon Photoaparat",
                    "subtitle": "12% Off",
                    "image": "assets/images/avatar/5.jpg",
                    "price": "$34.99"
                },
                {
                    "id": 6,
                    "title": "Objective",
                    "subtitle": "14% Off",
                    "image": "assets/images/avatar/7.jpg",
                    "price": "$499.99"
                },
            ]
        };
    };

    // DRAGEN AND DROP - Medium item with avatar data
    getDataForLayout3 = (): any => {
        return {
            "header": "List friends",
            "items": [
                {
                    "id": 1,
                    "title": "Erica Romaguera",
                    "subtitle": "@erica",
                    "image": "assets/images/avatar/13.jpg"
                },
                {
                    "id": 2,
                    "title": "Nia Gutkowski",
                    "subtitle": "@nia234",
                    "image": "assets/images/avatar/14.jpg"
                },
                {
                    "id": 3,
                    "title": "Camila Hintz",
                    "subtitle": "@camila",
                    "image": "assets/images/avatar/15.jpg"
                },
                {
                    "id": 4,
                    "title": "Anna Yost",
                    "subtitle": "@anna",
                    "image": "assets/images/avatar/16.jpg"
                },
                {
                    "id": 5,
                    "title": "Georgianna Baumbach",
                    "subtitle": "@georgianna",
                    "image": "assets/images/avatar/17.jpg"
                },
                {
                    "id": 6,
                    "title": "Jaqueline Stehr",
                    "subtitle": "@jaqueline",
                    "image": "assets/images/avatar/18.jpg"
                },
                {
                    "id": 7,
                    "title": "Naomi Mante",
                    "subtitle": "@naomi",
                    "image": "assets/images/avatar/19.jpg"
                },
                {
                    "id": 8,
                    "title": "Amaya Abshire",
                    "subtitle": "@amaya",
                    "image": "assets/images/avatar/20.jpg"
                },
                {
                    "id": 9,
                    "title": "Rickie Glover",
                    "subtitle": "@rickie",
                    "image": "assets/images/avatar/21.jpg"
                },
                {
                    "id": 10,
                    "title": "Antone Mayert",
                    "subtitle": "@antone",
                    "image": "assets/images/avatar/22.jpg"
                },
                {
                    "id": 11,
                    "title": "Alison Streich",
                    "subtitle": "@alison",
                    "image": "assets/images/avatar/23.jpg"
                }
            ]
        };
    }

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onItemClick': function(item: any) {
                  that.toastCtrl.presentToast(item);
            },
            'onProceed': function(item: any) {
                  that.toastCtrl.presentToast("Proceed");
            },
            'onButtonGetClick' : function(item: any) {
                  that.toastCtrl.presentToast("Confirm");
            },
            'onButtonClick' : function(item: any) {
                  that.toastCtrl.presentToast("Confirm");
            }
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
                    .object('listView/dragAndDrop/' + item.theme)
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
