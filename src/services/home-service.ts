import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'

@Injectable()
export class HomeService {

    constructor(public af: AngularFireDatabase) { }

    // HOME PAGE INFO
    getData = () => {
        return {
            "toolbarTitle": "Ionic 3 / Angular 6 UI Theme / Template App - Multipurpose Starter App - Gradient Blue Light",
            "title": "SAVE HOURS",
            "subtitle": "OF DEVELOPING",
            "subtitle2": "and make apps fast as light!",
            "link":"https://csform.com/documentation-for-ionic-3-angular-6-ui-theme-template-app-multipurpose-starter-app-gradient-blue-light/",
            "description": "For better understanding how our template works please read documentation.",
            "background": "assets/images/background/39.jpg"
        };
    };

    load(): Observable<any> {
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('home')
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
                observer.next(this.getData());
                observer.complete();
            });
        }
    }
}
