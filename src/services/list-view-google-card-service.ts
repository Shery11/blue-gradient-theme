import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class ListViewGoogleCardsService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'googleCards';

    getTitle = (): string => 'Google Cards';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Full image cards", "theme"  : "layout1"},
          {"title" : "Styled cards 2", "theme"  : "layout2"},
          {"title" : "Styled cards", "theme"  : "layout3"}
        ];
    };

    // GOOGLE CARD - Full image cards data
    getDataForLayout1 = (): any => {
        return {
            "items": [
              {
                  "id": 1,
                  "icon": "ios-arrow-dropright",
                  "iconText": "Watch now",
                  "title": "Lorem ipsum dolor sitamet",
                  "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                  "image": "assets/images/background/8.jpg",
                  "reviews": "4.12 (78 reviews)",
                  "ratingStar": {
                      "iconsStars": [
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": false,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          }
                      ],
                  }
              },
              {
                  "id": 2,
                  "icon": "ios-arrow-dropright",
                  "iconText": "Watch now",
                  "title": "Lorem ipsum dolor sitamet",
                  "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                  "image": "assets/images/background/9.jpg",
                  "reviews": "4.12 (78 reviews)",
                  "ratingStar": {
                      "iconsStars": [
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": false,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          }
                      ],
                  }
              },
              {
                  "id": 3,
                  "icon": "ios-arrow-dropright",
                  "iconText": "Watch now",
                  "title": "Lorem ipsum dolor sitamet",
                  "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                  "image": "assets/images/background/7.jpg",
                  "reviews": "4.12 (78 reviews)",
                  "ratingStar": {
                      "iconsStars": [
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": false,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          }
                      ],
                  }
              },
              {
                  "id": 4,
                  "icon": "ios-arrow-dropright",
                  "iconText": "Watch now",
                  "title": "Lorem ipsum dolor sitamet",
                  "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                  "image": "assets/images/background/2.jpg",
                  "reviews": "4.12 (78 reviews)",
                  "ratingStar": {
                      "iconsStars": [
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": false,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          }
                      ],
                  }
              },
              {
                  "id": 5,
                  "icon": "ios-arrow-dropright",
                  "iconText": "Watch now",
                  "title": "Lorem ipsum dolor sitamet",
                  "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                  "image": "assets/images/background/0.jpg",
                  "reviews": "4.12 (78 reviews)",
                  "ratingStar": {
                      "iconsStars": [
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": true,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          },
                          {
                              "isActive": false,
                              "iconActive": "icon-star",
                              "iconInactive": "icon-star-outline"
                          }
                      ],
                  }
              }
            ]
        };
    };

    // GOOGLE CARD - Styled cards 2 data
    getDataForLayout2 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "title": "Chevrolet",
                    "subtitle": "Category: Cars",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                    "image": "assets/images/background/10.jpg",
                    "priceText": "Price",
                    "price": "$75000",
                    "button": "Buy",
                    "shareIcon": "more",
                },
                {
                    "id": 2,
                    "title": "BMW",
                    "subtitle": "Category: Cars",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                    "image": "assets/images/background/11.jpg",
                    "priceText": "Price",
                    "price": "$130000",
                    "button": "Buy",
                    "shareIcon": "more",
                },
                {
                    "id": 3,
                    "title": "Yamaha",
                    "subtitle": "Category: Motocross",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                    "image": "assets/images/background/32.jpg",
                    "priceText": "Price",
                    "price": "$17354",
                    "button": "Buy",
                    "shareIcon": "more",
                },
                {
                    "id": 4,
                    "title": "Bass guitar",
                    "subtitle": "Category: Guitars",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                    "image": "assets/images/background/27.jpg",
                    "priceText": "Price",
                    "price": "$338.99",
                    "button": "Buy",
                    "shareIcon": "more",
                },
                {
                    "id": 5,
                    "title": "Classical guitar",
                    "subtitle": "Category: Guitars",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                    "image": "assets/images/background/28.jpg",
                    "priceText": "Price",
                    "price": "$109.60",
                    "button": "Buy",
                    "shareIcon": "more",
                },
            ]
        };
    };

    // GOOGLE CARD - Styled cards data
    getDataForLayout3 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "category": "best offer",
                    "image": "assets/images/background/32.jpg",
                    "title": "Motocross Holidays",
                    "subtitle": "West Avenue, NYC",
                    "button": "$135.99",
                },
                {
                    "id": 2,
                    "category": "main event",
                    "image": "assets/images/background/27.jpg",
                    "title": "Open Air Concert",
                    "subtitle": "Hyde Park, London",
                    "button": "$312.99",
                },
                {
                    "id": 3,
                    "category": "Best Tourt",
                    "image": "assets/images/background/31.jpg",
                    "title": "Sea ture",
                    "subtitle": "Guilin, Kweilin",
                    "button": "$213.45",
                },
                {
                    "id": 4,
                    "category": "Mountain",
                    "image": "assets/images/background/29.jpg",
                    "title": "Mountain Trout",
                    "subtitle": "Mountain Trout Camp",
                    "button": "$338.60",
                },
                {
                    "id": 5,
                    "category": "Bridge Tour",
                    "image": "assets/images/background/25.jpg",
                    "title": "Bridge Tour",
                    "subtitle": "BridgeClimb, Sydney",
                    "button": "$410.85",
                },
                {
                    "id": 6,
                    "category": "best events",
                    "image": "assets/images/background/30.jpg",
                    "title": "Skateboard tour",
                    "subtitle": "Hyde Park, London",
                    "button": "$516.55",
                }
            ]
        };
    }

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
                  that.toastCtrl.presentToast(item.title);
            },
            'onShare': function (item: any) {
                that.toastCtrl.presentToast(item.title);
            },
            'onRates': function (index: number) {
                  that.toastCtrl.presentToast("Rates " + (index + 1));
            },
            'onCheckBoxClick': function (item: any) {
                  that.toastCtrl.presentToast(item.title);
            },
            'onButtonClick': function (item: any) {
                  that.toastCtrl.presentToast("Refine");
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
    };

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('listView/googleCards/' + item.theme)
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
