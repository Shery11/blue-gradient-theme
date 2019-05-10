import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class MapsService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'maps';

    getTitle = (): string => 'Maps';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "GMAPS + Location  Details", "theme": "layout1" },
            { "title": "GMAPS + About Us", "theme": "layout2" },
            { "title": "Full Screen View", "theme": "layout3" }
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    //GMAPS + Location  Details data
    getDataForLayout1 = (): any => {
        return {
            "headerTitle": "GMAPS + Location  Details",
            "title": "Best Restaurants for Power Lunches",
            "reviews": "4.12 (78 reviews)",
            "contentTitle": "The iconic restaurant that has defined the term power lunch since 1959 is the one and only Four Seasons.",
            "contentDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
            "icon": "checkmark-circle",
            "location": "Design street, New York, USA",
            "time": "8:00 to 16:00 working days",
            "phone": "33 222 11",
            "webSite": "www.csform.com",
            "email": "dev@csform.com",
            "iconsStars": [
                {
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline",
                    "isActive": true
                },
                {
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline",
                    "isActive": true
                },
                {
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline",
                    "isActive": true
                },
                {
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline",
                    "isActive": true
                },
                {
                    "iconActive": "icon-star",
                    "iconInactive": "icon-star-outline",
                    "isActive": false
                }
            ],
            "map": {
                "lat": 40.712562,
                "lng": -74.005911,
                "zoom": 15,
                "mapTypeControl": true,
                "streetViewControl": true,
                "styles": [
                    {"elementType": 'geometry', "stylers": [{"color": '#242f3e'}]},
                    {"elementType": 'labels.text.stroke', "stylers": [{"color": '#242f3e'}]},
                    {"elementType": 'labels.text.fill', "stylers": [{"color": '#746855'}]},
                    {
                        "featureType": 'administrative.locality',
                        "elementType": 'labels.text.fill',
                        "stylers": [{color: '#d59563'}]
                    },
                    {
                        "featureType": 'poi',
                        "elementType": 'labels.text.fill',
                        "stylers": [{color: '#d59563'}]
                    },
                    {
                        "featureType": 'poi.park',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#263c3f'}]
                    },
                    {
                        "featureType": 'poi.park',
                        "elementType": 'labels.text.fill',
                        "stylers": [{"color": '#6b9a76'}]
                    },
                    {
                        "featureType": 'road',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#38414e'}]
                    },
                    {
                        "featureType": 'road',
                        "elementType": 'geometry.stroke',
                        "stylers": [{"color": '#212a37'}]
                    },
                    {
                        "featureType": 'road',
                        "elementType": 'labels.text.fill',
                        "stylers": [{"color": '#9ca5b3'}]
                    },
                    {
                        "featureType": 'road.highway',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#746855'}]
                    },
                    {
                        "featureType": 'road.highway',
                        "elementType": 'geometry.stroke',
                        "stylers": [{"color": '#1f2835'}]
                    },
                    {
                        "featureType": 'road.highway',
                        "elementType": 'labels.text.fill',
                        "stylers": [{"color": '#f3d19c'}]
                    },
                    {
                        "featureType": 'transit',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#2f3948'}]
                    },
                    {
                        "featureType": 'transit.station',
                        "elementType": 'labels.text.fill',
                        "stylers": [{"color": '#d59563'}]
                    },
                    {
                        "featureType": 'water',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#17263c'}]
                    },
                    {
                        "featureType": 'water',
                        "elementType": 'labels.text.fill',
                        "stylers": [{"color": '#515c6d'}]
                    },
                    {
                        "featureType": 'water',
                        "elementType": 'labels.text.stroke',
                        "stylers": [{"color": '#17263c'}]
                    }
                ]
            }
        };
    };

    //GMAPS + About Us data
    getDataForLayout2 = (): any => {
        return {
            "headerTitle": "GMAPS + About Us",
            "title": "Creative Studio Form",
            "titleDescription": "Design & Development agency",
            "contentTitle": "About us",
            "contentDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
            "icon": "checkmark-circle",
            "location": "Design street, New York, USA",
            "time": "8:00 to 16:00 working days",
            "phone": "33 222 11",
            "webSite": "www.csform.com",
            "email": "dev@csform.com",
            "titleMap": "Here we are :",
            "map": {
                "lat": 40.712562,
                "lng": -74.005911,
                "zoom": 15,
                "mapTypeControl": true,
                "streetViewControl": true,
                "styles": [
                    {"elementType": 'geometry', "stylers": [{"color": '#242f3e'}]},
                    {"elementType": 'labels.text.stroke', "stylers": [{"color": '#242f3e'}]},
                    {"elementType": 'labels.text.fill', "stylers": [{"color": '#746855'}]},
                    {
                        "featureType": 'administrative.locality',
                        "elementType": 'labels.text.fill',
                        "stylers": [{color: '#d59563'}]
                    },
                    {
                        "featureType": 'poi',
                        "elementType": 'labels.text.fill',
                        "stylers": [{color: '#d59563'}]
                    },
                    {
                        "featureType": 'poi.park',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#263c3f'}]
                    },
                    {
                        "featureType": 'poi.park',
                        "elementType": 'labels.text.fill',
                        "stylers": [{"color": '#6b9a76'}]
                    },
                    {
                        "featureType": 'road',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#38414e'}]
                    },
                    {
                        "featureType": 'road',
                        "elementType": 'geometry.stroke',
                        "stylers": [{"color": '#212a37'}]
                    },
                    {
                        "featureType": 'road',
                        "elementType": 'labels.text.fill',
                        "stylers": [{"color": '#9ca5b3'}]
                    },
                    {
                        "featureType": 'road.highway',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#746855'}]
                    },
                    {
                        "featureType": 'road.highway',
                        "elementType": 'geometry.stroke',
                        "stylers": [{"color": '#1f2835'}]
                    },
                    {
                        "featureType": 'road.highway',
                        "elementType": 'labels.text.fill',
                        "stylers": [{"color": '#f3d19c'}]
                    },
                    {
                        "featureType": 'transit',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#2f3948'}]
                    },
                    {
                        "featureType": 'transit.station',
                        "elementType": 'labels.text.fill',
                        "stylers": [{"color": '#d59563'}]
                    },
                    {
                        "featureType": 'water',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#17263c'}]
                    },
                    {
                        "featureType": 'water',
                        "elementType": 'labels.text.fill',
                        "stylers": [{"color": '#515c6d'}]
                    },
                    {
                        "featureType": 'water',
                        "elementType": 'labels.text.stroke',
                        "stylers": [{"color": '#17263c'}]
                    }
                ]
            }
        };
    };

    //Full Screen View data
    getDataForLayout3 = (): any => {
        return {
            "title": "Your location",
            "headerTitle": "Full Screen View",
            "map": {
                "lat": 40.712562,
                "lng": -74.005911,
                "zoom": 15,
                "mapTypeControl": true,
                "streetViewControl": true,
                "styles": [
                    {"elementType": 'geometry', "stylers": [{"color": '#242f3e'}]},
                    {"elementType": 'labels.text.stroke', "stylers": [{"color": '#242f3e'}]},
                    {"elementType": 'labels.text.fill', "stylers": [{"color": '#746855'}]},
                    {
                        "featureType": 'administrative.locality',
                        "elementType": 'labels.text.fill',
                        "stylers": [{color: '#d59563'}]
                    },
                    {
                        "featureType": 'poi',
                        "elementType": 'labels.text.fill',
                        "stylers": [{color: '#d59563'}]
                    },
                    {
                        "featureType": 'poi.park',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#263c3f'}]
                    },
                    {
                        "featureType": 'poi.park',
                        "elementType": 'labels.text.fill',
                        "stylers": [{"color": '#6b9a76'}]
                    },
                    {
                        "featureType": 'road',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#38414e'}]
                    },
                    {
                        "featureType": 'road',
                        "elementType": 'geometry.stroke',
                        "stylers": [{"color": '#212a37'}]
                    },
                    {
                        "featureType": 'road',
                        "elementType": 'labels.text.fill',
                        "stylers": [{"color": '#9ca5b3'}]
                    },
                    {
                        "featureType": 'road.highway',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#746855'}]
                    },
                    {
                        "featureType": 'road.highway',
                        "elementType": 'geometry.stroke',
                        "stylers": [{"color": '#1f2835'}]
                    },
                    {
                        "featureType": 'road.highway',
                        "elementType": 'labels.text.fill',
                        "stylers": [{"color": '#f3d19c'}]
                    },
                    {
                        "featureType": 'transit',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#2f3948'}]
                    },
                    {
                        "featureType": 'transit.station',
                        "elementType": 'labels.text.fill',
                        "stylers": [{"color": '#d59563'}]
                    },
                    {
                        "featureType": 'water',
                        "elementType": 'geometry',
                        "stylers": [{"color": '#17263c'}]
                    },
                    {
                        "featureType": 'water',
                        "elementType": 'labels.text.fill',
                        "stylers": [{"color": '#515c6d'}]
                    },
                    {
                        "featureType": 'water',
                        "elementType": 'labels.text.stroke',
                        "stylers": [{"color": '#17263c'}]
                    }
                ]
            }
        };
    };


    getEventsForTheme = (menuItem: any): any => {
      var that = this;
        return {
            'onRates': function (index: number) {
                  that.toastCtrl.presentToast("Rates " + (index + 1));
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
                    .object('maps/' + item.theme)
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
