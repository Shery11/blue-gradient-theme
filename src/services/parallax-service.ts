import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class ParallaxService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'parallax';

    getTitle = (): string => 'Parallax';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "News List", "theme": "layout1" },
            { "title": "Profile", "theme": "layout2" },
            { "title": "Product", "theme": "layout3" },
            { "title": "News", "theme": "layout4" }
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    // PARALLAX - News List data
    getDataForLayout1 = (): any => {
        return {
            "headerTitle": "Showbiz",
            "headerImage": "assets/images/background/34.jpg",
            "title": "Engage real-time",
            "subtitle": "Startup Pitches",
            "items": [
                {
                    "id": 1,
                    "title": "Victoria Simpson",
                    "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                    "image": "assets/images/avatar/24.jpg",
                    "imageAlt": "avatar",
                    "button": "Read"
                },
                {
                    "id": 2,
                    "title": "Samantha Reynolds",
                    "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                    "image": "assets/images/avatar/10.jpg",
                    "imageAlt": "avatar",
                    "button": "Read"
                },
                {
                    "id": 3,
                    "title": "Stacey Harris",
                    "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                    "image": "assets/images/avatar/11.jpg",
                    "imageAlt": "avatar",
                    "button": "Read"
                },
                {
                    "id": 4,
                    "title": "Jacqueline Guyon",
                    "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                    "image": "assets/images/avatar/12.jpg",
                    "imageAlt": "avatar",
                    "button": "Read"
                },
                {
                    "id": 5,
                    "title": "Mia Langevoort",
                    "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                    "image": "assets/images/avatar/13.jpg",
                    "imageAlt": "avatar",
                    "button": "Read"
                },
                {
                    "id": 6,
                    "title": "Amy Simsek",
                    "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                    "image": "assets/images/avatar/14.jpg",
                    "imageAlt": "avatar",
                    "button": "Read"
                },
                {
                    "id": 7,
                    "title": "Charlotte Sital",
                    "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                    "image": "assets/images/avatar/15.jpg",
                    "imageAlt": "avatar",
                    "button": "Read"
                },
                {
                    "id": 8,
                    "title": "Iria Padrón",
                    "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                    "image": "assets/images/avatar/16.jpg",
                    "imageAlt": "avatar",
                    "button": "Read"
                },
                {
                    "id": 9,
                    "title": "Laura Sarabia",
                    "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                    "image": "assets/images/avatar/17.jpg",
                    "imageAlt": "avatar",
                    "button": "Read"
                },
                {
                    "id": 10,
                    "title": "Alexia Bañuelos",
                    "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                    "image": "assets/images/avatar/18.jpg",
                    "imageAlt": "avatar",
                    "button": "Read"
                },
                {
                    "id": 11,
                    "title": "Erika Quiroz",
                    "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                    "image": "assets/images/avatar/19.jpg",
                    "imageAlt": "avatar",
                    "button": "Read"
                },
                {
                    "id": 12,
                    "title": "Emma Banda",
                    "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                    "image": "assets/images/avatar/20.jpg",
                    "imageAlt": "Presque Isle Harbor",
                    "button": "Read"
                }
            ]
        };
    };

    // PARALLAX - Profile data
    getDataForLayout2 = (): any => {
        return {
            "headerTitle": "Profile",
            "headerImage": "assets/images/background/13.jpg",
            "avatar": "assets/images/avatar/14.jpg",
            "title": "Jessica White",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "items": [
                {
                    "id": 1,
                    "avatar": "assets/images/avatar/16.jpg",
                    "title": "Tom Adams",
                    "subtitle": "@tom",
                    "button": "Follow"
                },
                {
                    "id": 2,
                    "avatar": "assets/images/avatar/17.jpg",
                    "title": "Logan Rogers",
                    "subtitle": "@logan",
                    "button": "Follow"
                },
                {
                    "id": 3,
                    "avatar": "assets/images/avatar/18.jpg",
                    "title": "Gary Russell",
                    "subtitle": "@gary",
                    "button": "Follow"
                },
                {
                    "id": 4,
                    "avatar": "assets/images/avatar/19.jpg",
                    "title": "Amy Lee",
                    "subtitle": "@amy",
                    "button": "Follow"
                },
                {
                    "id": 5,
                    "avatar": "assets/images/avatar/20.jpg",
                    "title": "Silvia Salvador",
                    "subtitle": "@silvia",
                    "button": "Follow"
                },
                {
                    "id": 6,
                    "avatar": "assets/images/avatar/15.jpg",
                    "title": "Alexandra Parker",
                    "subtitle": "@alexandra",
                    "button": "Follow"
                },
                {
                    "id": 7,
                    "avatar": "assets/images/avatar/22.jpg",
                    "title": "Gabriel Mascareñas",
                    "subtitle": "@gabriel",
                    "button": "Follow"
                },
                {
                    "id": 8,
                    "avatar": "assets/images/avatar/14.jpg",
                    "title": "Sofia Clarke",
                    "subtitle": "@stephen",
                    "button": "Follow"
                },
                {
                    "id": 9,
                    "avatar": "assets/images/avatar/21.jpg",
                    "title": "Lisa Green",
                    "subtitle": "@lisa",
                    "button": "Follow"
                },
                {
                    "id": 10,
                    "avatar": "assets/images/avatar/23.jpg",
                    "title": "Danijel Bilic",
                    "subtitle": "@danijel",
                    "button": "Follow"
                }
            ]
        };
    };

    // PARALLAX - Product data
    getDataForLayout3 = (): any => {
        return {
            "headerTitle": "Product",
            "headerImage": "assets/images/background/14.jpg",
            "shareIcon": "more",
            "items": [
                {
                    "id": 1,
                    "category": "NEW OFFER",
                    "title": "Super & Black",
                    "titleDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy",
                    "subtitle": "Available Now",
                    "button": "$63.99",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "productDescriptions": [
                        {
                            "id": 1,
                            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        },
                        {
                            "id": 2,
                            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        },
                        {
                            "id": 3,
                            "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                        },
                        {
                            "id": 4,
                            "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                        }
                    ]
                }
            ]
        };
    };

    // PARALLAX - News data
    getDataForLayout4 = (): any => {
        return {
            "headerTitle": "News",
            "headerImage": "assets/images/background/5.jpg",
            "title": "Infinit bridge made in China.",
            "subtitle": "by Myrtle Stiedemann",
            "category": "ENGINEERING",
            "avatar": "assets/images/avatar/24.jpg",
            "shareIcon": "more",
            "items": [
                {
                    "id": 1,
                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    "id": 2,
                    "title": "Lorem ipsum dolor sit amet",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    "id": 3,
                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                },
                {
                    "id": 4,
                    "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                }
            ]
        };
    }

    getEventsForTheme = (menuItem: any): any => {
      var that = this;
        return {
            'onProceed': function (item: any) {
                  that.toastCtrl.presentToast("onProceed");
            },
            'onShare': function (item: any) {
                  that.toastCtrl.presentToast("Share");
            },
            'onItemClick': function (item: any) {
                  that.toastCtrl.presentToast(item.title);
            },
        };
    };

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: this.getDataForTheme(item),
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
                    .object('parallax/' + item.theme)
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
