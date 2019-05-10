import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class ListViewSwipeToDismissService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'swipeToDismiss';

    getTitle = (): string => 'Swipe to dismiss';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Small item + header", "theme"  : "layout1"},
          {"title" : "Products + CTA", "theme"  : "layout2"},
          {"title" : "Full width image", "theme"  : "layout3"}
        ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    // SWIPE TO DISMISS - Small item + header data
    getDataForLayout1 = (): any => {
        return {
            "header": "Inbox",
            "title": "8 new mesages",
            "subtitle": "Mark all messages as read.",
            "button": "ok",
            "items": [
                {
                    "id": 1,
                    "title": "Yasmine Hassan",
                    "subtitle": "AIGA Design Conference",
                    "time": "6min ago",
                    "icon": "ios-information-circle-outline"
                },
                {
                    "id": 2,
                    "title": "Adam Wolters",
                    "subtitle": "An Event Apart",
                    "time": "58min ago",
                    "icon": "ios-information-circle-outline"
                },
                {
                    "id": 3,
                    "title": "Livia Koning",
                    "subtitle": "Core 77 Conference",
                    "time": "12min ago",
                    "icon": "ios-information-circle-outline"
                },
                {
                    "id": 4,
                    "title": "Fatima Hussein",
                    "subtitle": "London Design Festival",
                    "time": "23min ago",
                    "icon": "ios-information-circle-outline"
                },
                {
                    "id": 5,
                    "title": "Lars Sambo",
                    "subtitle": "NeoCon",
                    "time": "43min ago",
                    "icon": "ios-information-circle-outline"
                },
                {
                    "id": 6,
                    "title": "Kyan Zhou",
                    "subtitle": "New York Times Cities for Tomorrow",
                    "time": "62min ago",
                    "icon": "ios-information-circle-outline"
                },
                {
                    "id": 7,
                    "title": "Amina Mohan",
                    "subtitle": "Salone del Mobile Milano",
                    "time": "81min ago",
                    "icon": "ios-information-circle-outline"
                },
                {
                    "id": 8,
                    "title": "Emir van der Velden",
                    "subtitle": "Creative Mornings",
                    "time": "98min ago",
                    "icon": "ios-information-circle-outline"
                }
            ]
        };
    };

    // SWIPE TO DISMISS - Products + CTA data
    getDataForLayout2 = (): any => {
        return {
            "header": "Followings",
            "items": [
                {
                    "id": 1,
                    "title": "Isabel Anguiano",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/images/avatar/24.jpg",
                    "ionButton": "Follow",
                    "delate": "Delete"
                },
                {
                    "id": 2,
                    "title": "Iria Mascareñas",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/images/avatar/10.jpg",
                    "ionButton": "Follow",
                    "delate": "Delete"
                },
                {
                    "id": 3,
                    "title": "Maria Cardenas",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/images/avatar/11.jpg",
                    "ionButton": "Follow",
                    "delate": "Delete"
                },
                {
                    "id": 4,
                    "title": "Silvia Salvador",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/images/avatar/12.jpg",
                    "ionButton": "Follow",
                    "delate": "Delete"
                },
                {
                    "id": 5,
                    "title": "Marina Vidal",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur.",
                    "image": "assets/images/avatar/13.jpg",
                    "ionButton": "Follow",
                    "delate": "Delete"
                },
                {
                    "id": 6,
                    "title": "Sara Alcántarl",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/images/avatar/14.jpg",
                    "ionButton": "Follow",
                    "delate": "Delete"
                },
                {
                    "id": 7,
                    "title": "Gabriela Reyes",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "image": "assets/images/avatar/15.jpg",
                    "ionButton": "Follow",
                    "delate": "Delete"
                }
            ]
        };
    };

    // SWIPE TO DISMISS - Full width image data
    getDataForLayout3 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "title": "Chevrolet",
                    "subtitle": "Pre-sale",
                    "image": "assets/images/background/10.jpg",
                    "delate": "Delete"
                },
                {
                    "id": 2,
                    "title": "BMW",
                    "subtitle": "Order now!",
                    "image": "assets/images/background/11.jpg",
                    "delate": "Delete"
                },
                {
                    "id": 3,
                    "title": "Yamaha",
                    "subtitle": "Pre-sale",
                    "image": "assets/images/background/32.jpg",
                    "delate": "Delete"
                }
            ]
        };
    };


    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onItemClick': function(item: any) {
                  that.toastCtrl.presentToast(item);
            },
            'onDelete': function(item: any) {
                  that.toastCtrl.presentToast("Delete " + item.title);
            },
            'onButtonGetClick': function(item: any) {
                  that.toastCtrl.presentToast(item);
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
                    .object('listView/swipeToDismiss/' + item.theme)
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
