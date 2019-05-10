import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class ListViewStickyListHeaderService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'stickyListHeader';

    getTitle = (): string => 'Sticky List header';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "Basic", "theme": "layout1" },
            { "title": "Product", "theme": "layout2" },
            { "title": "Post", "theme": "layout3" }
        ];
    };

    // STICKY LIST HEADER - Basic data
    getDataForLayout1 = (): any => {
        return {
            "items": [
                {
                    "groupName": "Jazz",
                    "items": [
                        {
                            "id": 1,
                            "title": "Iria Mascareñas",
                            "image": "assets/images/avatar/24.jpg",
                            "price": "$58.99",
                            "subtitle": "58 songs"
                        },
                        {
                            "id": 2,
                            "title": "Isaac Alvarado",
                            "image": "assets/images/avatar/23.jpg",
                            "price": "$116.99",
                            "subtitle": "158 songs"
                        },
                        {
                            "id": 3,
                            "title": "Joan Alemán",
                            "image": "assets/images/avatar/22.jpg",
                            "price": "$8.29",
                            "subtitle": "18 songs"
                        }
                    ]
                },
                {
                    "groupName": "Pop",
                    "items": [
                        {
                            "id": 1,
                            "title": "Liam Hughes",
                            "image": "assets/images/avatar/21.jpg",
                            "price": "$13.95",
                            "subtitle": "18 songs"
                        },
                        {
                            "id": 2,
                            "title": "Yasmine Hassan",
                            "image": "assets/images/avatar/20.jpg",
                            "price": "$3.89",
                            "subtitle": "13 songs"
                        },
                        {
                            "id": 3,
                            "title": "Fatima Hussein",
                            "image": "assets/images/avatar/19.jpg",
                            "price": "$45.06",
                            "subtitle": "58 songs"
                        },
                        {
                            "id": 4,
                            "title": "Mia Vegt",
                            "image": "assets/images/avatar/18.jpg",
                            "price": "$56.66",
                            "subtitle": "34 songs"
                        },
                        {
                            "id": 5,
                            "title": "Amina Mohan",
                            "image": "assets/images/avatar/17.jpg",
                            "price": "$6.78",
                            "subtitle": "43 songs"
                        }
                    ]
                },
                {
                    "groupName": "Rock",
                    "items": [
                        {
                            "id": 1,
                            "title": "Jéssica Baptista",
                            "image": "assets/images/avatar/16.jpg",
                            "price": "$13.99",
                            "subtitle": "53 songs"
                        },
                        {
                            "id": 2,
                            "title": "Ana Rodrigues",
                            "image": "assets/images/avatar/15.jpg",
                            "price": "$19.99",
                            "subtitle": "31 songs"
                        },
                        {
                            "id": 3,
                            "title": "Diana Oliveira",
                            "image": "assets/images/avatar/14.jpg",
                            "price": "$7.99",
                            "subtitle": "23 songs"
                        },
                        {
                            "id": 4,
                            "title": "Ariana Barros",
                            "image": "assets/images/avatar/13.jpg",
                            "price": "$45.99",
                            "subtitle": "45 songs"
                        },
                        {
                            "id": 5,
                            "title": "Bárbara Lima",
                            "image": "assets/images/avatar/12.jpg",
                            "price": "$39.75",
                            "subtitle": "64 songs"
                        }
                    ]
                },
                {
                    "groupName": "Pop and Rock",
                    "items": [
                        {
                            "id": 1,
                            "title": "Theresa Mason",
                            "image": "assets/images/avatar/11.jpg",
                            "price": "$34.59",
                            "subtitle": "67 songs"
                        },
                        {
                            "id": 2,
                            "title": "Samantha Kennedy",
                            "image": "assets/images/avatar/10.jpg",
                            "price": "$44.99",
                            "subtitle": "40 songs"
                        },
                        {
                            "id": 3,
                            "title": "Alice Kelly",
                            "image": "assets/images/avatar/9.jpg",
                            "price": "$89.45",
                            "subtitle": "74 songs"
                        },
                        {
                            "id": 4,
                            "title": "Caitlin Wilkinson",
                            "image": "assets/images/avatar/24.jpg",
                            "price": "$3.10",
                            "subtitle": "80 songs"
                        }
                    ]
                },
                {
                    "groupName": "Bluz",
                    "items": [
                        {
                            "id": 1,
                            "title": "Lisa Bennett",
                            "image": "assets/images/avatar/20.jpg",
                            "price": "$7.99",
                            "subtitle": "85 songs"
                        },
                        {
                            "id": 2,
                            "title": "Jennifer Robertson",
                            "image": "assets/images/avatar/19.jpg",
                            "price": "$77.39",
                            "subtitle": "180 songs"
                        },
                        {
                            "id": 3,
                            "title": "Amanda Smith",
                            "image": "assets/images/avatar/16.jpg",
                            "price": "$10.99",
                            "subtitle": "10 songs"
                        },
                        {
                            "id": 4,
                            "title": "Eileen Owen",
                            "image": "assets/images/avatar/15.jpg",
                            "price": "$75.95",
                            "subtitle": "120 songs"
                        }
                    ]
                }
            ]
        };
    };

    // STICKY LIST HEADER - Product data
    getDataForLayout2 = (): any => {
        return {
            "items": [
                {
                    "groupName": "Watches",
                    "items": [
                        {
                            "id": 1,
                            "title": "Watches Black",
                            "image1": "assets/images/background/34.jpg",
                            "image2": "assets/images/avatar/4.jpg",
                            "image3": "assets/images/avatar/6.jpg",
                            "image4": "assets/images/avatar/1.jpg",
                            "price": "$33.99",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        },
                        {
                            "id": 2,
                            "title": "MacBook",
                            "image1": "assets/images/background/4.jpg",
                            "image2": "assets/images/avatar/2.jpg",
                            "image3": "assets/images/avatar/1.jpg",
                            "image4": "assets/images/avatar/0.jpg",
                            "price": "$28.17",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        }
                    ]
                },
                {
                    "groupName": "iPhone",
                    "items": [
                        {
                            "id": 1,
                            "title": "iPhone X-Apple",
                            "image1": "assets/images/background/14.jpg",
                            "image2": "assets/images/avatar/9.jpg",
                            "image3": "assets/images/avatar/1.jpg",
                            "image4": "assets/images/avatar/2.jpg",
                            "price": "$31.99",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        },
                        {
                            "id": 2,
                            "title": "iPhone 7 Plus",
                            "image1": "assets/images/background/3.jpg",
                            "image2": "assets/images/avatar/0.jpg",
                            "image3": "assets/images/avatar/3.jpg",
                            "image4": "assets/images/avatar/6.jpg",
                            "price": "$25.69",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        },
                        {
                            "id": 3,
                            "title": "iPhone SE",
                            "image1": "assets/images/background/6.jpg",
                            "image2": "assets/images/avatar/9.jpg",
                            "image3": "assets/images/avatar/1.jpg",
                            "image4": "assets/images/avatar/0.jpg",
                            "price": "$13.66",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        }
                    ]
                },
                {
                    "groupName": "Nikon Photoaparat",
                    "items": [
                        {
                            "id": 1,
                            "title": "Objective",
                            "image1": "assets/images/background/4.jpg",
                            "image2": "assets/images/avatar/5.jpg",
                            "image3": "assets/images/avatar/8.jpg",
                            "image4": "assets/images/avatar/7.jpg",
                            "price": "$17.89",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        },
                        {
                            "id": 2,
                            "title": "50mm",
                            "image1": "assets/images/background/33.jpg",
                            "image2": "assets/images/avatar/3.jpg",
                            "image3": "assets/images/avatar/6.jpg",
                            "image4": "assets/images/avatar/9.jpg",
                            "price": "$55.01",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        },
                        {
                            "id": 3,
                            "title": "Nikon S3",
                            "image1": "assets/images/background/3.jpg",
                            "image2": "assets/images/avatar/9.jpg",
                            "image3": "assets/images/avatar/8.jpg",
                            "image4": "assets/images/avatar/5.jpg",
                            "price": "$14.45",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        }
                    ]
                },
                {
                    "groupName": "Keyboard wireless",
                    "items": [
                        {
                            "id": 1,
                            "title": "Magic Trackpad 2 - Silver",
                            "image1": "assets/images/background/4.jpg",
                            "image2": "assets/images/avatar/2.jpg",
                            "image3": "assets/images/avatar/9.jpg",
                            "image4": "assets/images/avatar/0.jpg",
                            "price": "$17.99",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        },
                        {
                            "id": 2,
                            "title": "Logitech Wireless Solar Keyboard",
                            "image1": "assets/images/background/14.jpg",
                            "image2": "assets/images/avatar/0.jpg",
                            "image3": "assets/images/avatar/2.jpg",
                            "image4": "assets/images/avatar/1.jpg",
                            "price": "$44.99",
                            "buy": "buy",
                            "subtitle": "Free shipping"
                        }
                    ]
                }
            ]
        };
    };

    // STICKY LIST HEADER - Post data
    getDataForLayout3 = (): any => {
        return {
            "items": [
                {
                    "groupName": "Yesterday",
                    "dateTime": "January 19, 2018.",
                    "items": [
                        {
                            "id": 1,
                            "name": "Adeline O'Reilly",
                            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/24.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        },
                        {
                            "id": 2,
                            "name": "Valentina Fritsch",
                            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/10.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        }
                    ]
                },
                {
                    "groupName": "Today",
                    "dateTime": "June 26, 2018.",
                    "items": [
                        {
                            "id": 1,
                            "name": "Reanna Langosh",
                            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/11.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        },
                        {
                            "id": 2,
                            "name": "Theresia Bechtelar",
                            "title": "Lorem ipsum dolor sit amet.",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/12.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        }
                    ]
                },
                {
                    "groupName": "tomorrow",
                    "dateTime": "August 07, 2018.",
                    "items": [
                        {
                            "id": 1,
                            "name": "Jena Lesch",
                            "title": "Lorem ipsum dolor sit amet, consectetur.",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/13.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        },
                        {
                            "id": 2,
                            "name": "Yesenia Beer",
                            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                            "shareIcon": "more",
                            "image": "assets/images/avatar/14.jpg",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                        }
                    ]
                }
            ]
        };
    };

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onItemClick': function (item: any) {
                  that.toastCtrl.presentToast(item);
            },
            'onProceed': function (item: any) {
                  that.toastCtrl.presentToast(item);
            },
            'onBuy': function (item: any) {
                  that.toastCtrl.presentToast(item);
            },
            'onShare': function (item: any) {
                  that.toastCtrl.presentToast(item);
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
                    .object('listView/stickyListHeader/' + item.theme)
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
