import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { LoadingService } from './loading-service'
import { ToastService } from './toast-service';

@Injectable()
export class TabsService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

  getId = (): string => 'tabs';

  getTitle = (): string => 'Tabs';

  getAllThemes = (): Array<any> => {
    return [
      { "title": "Footer tab - text", "theme": "layout1" },
      { "title": "Footer tab - icons", "theme": "layout2" },
      { "title": "Header tab - text", "theme": "layout3" }
    ];
  };

  getDataForTheme = (menuItem: any): Array<any> => {
    return this[
      'getDataFor' +
      menuItem.charAt(0).toUpperCase() +
      menuItem.slice(1)
    ]();
  };

  /** Settings Tabs Footer tab - text  **/

  getDataForTab1 = (): any => {
    return {
      "header": "List Frends",
      "items": [
        {
          "title": "Theresa Mason",
          "subtitle": "@theresa.mason",
          "follow": "follow",
          "avatar": "assets/images/avatar/24.jpg"
        },
        {
          "title": "Edward Chapman",
          "subtitle": "@edward.chapman",
          "follow": "follow",
          "avatar": "assets/images/avatar/23.jpg"
        },
        {
          "title": "Liam Hughes",
          "subtitle": "@liam.hughes",
          "follow": "follow",
          "avatar": "assets/images/avatar/22.jpg"
        },
        {
          "title": "Thomas Bonnet",
          "subtitle": "@thomas.bonnet",
          "follow": "follow",
          "avatar": "assets/images/avatar/21.jpg"
        },
        {
          "title": "Caitlin Wilkinson",
          "subtitle": "@caitlin.wilkinson",
          "follow": "follow",
          "avatar": "assets/images/avatar/20.jpg"
        },
        {
          "title": "Isabelle Barthelemy",
          "subtitle": "@isabelle.barthelemy",
          "follow": "follow",
          "avatar": "assets/images/avatar/19.jpg"
        },
        {
          "title": "Samantha Kennedy",
          "subtitle": "@samantha.ennedy",
          "follow": "follow",
          "avatar": "assets/images/avatar/18.jpg"
        }
      ]
    };
  }

  getDataForTab2 = (): any => {
    return {
      "header": "List Frends",
      "items": [
        {
          "title": "Isabel Villar",
          "subtitle": "@isabel.villar",
          "follow": "follow",
          "avatar": "assets/images/avatar/17.jpg"
        },
        {
          "title": "Silvia Salvador",
          "subtitle": "@silvia.salvador",
          "follow": "follow",
          "avatar": "assets/images/avatar/16.jpg"
        },
        {
          "title": "Marguerite Thibault",
          "subtitle": "@marguerite.thibault",
          "follow": "follow",
          "avatar": "assets/images/avatar/15.jpg"
        },
        {
          "title": "Marianne Maillet",
          "subtitle": "@marianne.maillet",
          "follow": "follow",
          "avatar": "assets/images/avatar/14.jpg"
        },
        {
          "title": "Julie Martins",
          "subtitle": "@julie.martins",
          "follow": "follow",
          "avatar": "assets/images/avatar/13.jpg"
        },
        {
          "title": "Sofia Zepeda",
          "subtitle": "@sofia.zepeda",
          "follow": "follow",
          "avatar": "assets/images/avatar/12.jpg"
        },
        {
          "title": "Nathalie Voisin",
          "subtitle": "@nathalie.voisin",
          "follow": "follow",
          "avatar": "assets/images/avatar/11.jpg"
        }
      ]
    };
  }

  getDataForTab3 = (): any => {
    return {
      "header": "List Frends",
      "items": [
        {
          "title": "Anne Lesage",
          "subtitle": "@anne.lesage",
          "follow": "follow",
          "avatar": "assets/images/avatar/10.jpg"
        },
        {
          "title": "Vera Mertens",
          "subtitle": "@vera.mertens",
          "follow": "follow",
          "avatar": "assets/images/avatar/24.jpg"
        },
        {
          "title": "Lilli Sauter",
          "subtitle": "@lilli.sauter",
          "follow": "follow",
          "avatar": "assets/images/avatar/11.jpg"
        },
        {
          "title": "Friedhelm Hagen",
          "subtitle": "@friedhelm.hagen",
          "follow": "follow",
          "avatar": "assets/images/avatar/22.jpg"
        },
        {
          "title": "Catrin Seidl",
          "subtitle": "@catrin.seidl",
          "follow": "follow",
          "avatar": "assets/images/avatar/20.jpg"
        },
        {
          "title": "Juliette Ferreira",
          "subtitle": "@juliette.ferreira",
          "follow": "follow",
          "avatar": "assets/images/avatar/18.jpg"
        },
        {
          "title": "Lucia Christ",
          "subtitle": "@lucia.christ",
          "follow": "follow",
          "avatar": "assets/images/avatar/16.jpg"
        }
      ]
    };
  }

  getDataForTab4 = (): any => {
    return {
      "header": "List Frends",
      "items": [
        {
          "title": "Jacqueline Guyon",
          "subtitle": "@jacqueline.guyon",
          "follow": "follow",
          "avatar": "assets/images/avatar/14.jpg"
        },
        {
          "title": "Alice Vieira",
          "subtitle": "@alice.vieira",
          "follow": "follow",
          "avatar": "assets/images/avatar/12.jpg"
        },
        {
          "title": "Marine Aubry",
          "subtitle": "@marine.aubry",
          "follow": "follow",
          "avatar": "assets/images/avatar/10.jpg"
        },
        {
          "title": "Ana Rodrigues",
          "subtitle": "@ana.rodrigues",
          "follow": "follow",
          "avatar": "assets/images/avatar/24.jpg"
        }
      ]
    };
  }

  getDataForTab5 = (): any => {
    return {
      "header": "List Frends",
      "items": [
        {
          "title": "Ana Rodrigues",
          "subtitle": "@ana.rodrigues",
          "follow": "follow",
          "avatar": "assets/images/avatar/11.jpg"
        },
        {
          "title": "Diana Oliveira",
          "subtitle": "@diana.oliveira",
          "follow": "follow",
          "avatar": "assets/images/avatar/13.jpg"
        },
        {
          "title": "Tatiana Abreu",
          "subtitle": "@tatiana.abreu",
          "follow": "follow",
          "avatar": "assets/images/avatar/15.jpg"
        },
        {
          "title": "Sofia Zepeda",
          "subtitle": "@sofia.zepeda",
          "follow": "follow",
          "avatar": "assets/images/avatar/17.jpg"
        }
      ]
    };
  }

  /** Settings Tabs Footer tab - icons  **/

  getDataForTab6 = (): any => {
    return {
      "headerTitle": "News",
      "items": [
        {
            "id": 1,
            "title": "Digital Watch",
            "subtitle": "Category: Watch",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/3.jpg",
            "priceText": "Price",
            "price": "$144.50",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 2,
            "title": "MacBook Air",
            "subtitle": "Category: MacBook",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/4.jpg",
            "priceText": "Price",
            "price": "$130.99",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 3,
            "title": "iPhone X",
            "subtitle": "Category: iPhone",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/6.jpg",
            "priceText": "Price",
            "price": "$354.05",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 4,
            "title": "iPhone 7",
            "subtitle": "Category: iPhone",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/14.jpg",
            "priceText": "Price",
            "price": "$338.99",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 5,
            "title": "iPhone",
            "subtitle": "Category: iPhone",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/3.jpg",
            "priceText": "Price",
            "price": "$109.60",
            "button": "Buy",
            "shareIcon": "more"
        },
      ]
    };
  }

  getDataForTab7 = (): any => {
    return {
      "headerTitle": "News",
      "items": [
        {
            "id": 1,
            "title": "BMW",
            "subtitle": "Category: Cars",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/11.jpg",
            "priceText": "Price",
            "price": "$144.50",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 2,
            "title": "Chevrolet",
            "subtitle": "Category: Cars",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/10.jpg",
            "priceText": "Price",
            "price": "$130.99",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 3,
            "title": "Yamaha",
            "subtitle": "Category: Motocross",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/32.jpg",
            "priceText": "Price",
            "price": "$354.05",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 4,
            "title": "Liberty Skis",
            "subtitle": "Category: Mountain Skis",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/29.jpg",
            "priceText": "Price",
            "price": "$338.99",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 5,
            "title": "Krooked Skateboards",
            "subtitle": "Category: Skateboard",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/30.jpg",
            "priceText": "Price",
            "price": "$109.60",
            "button": "Buy",
            "shareIcon": "more"
        },
      ]
    };
  }

  getDataForTab8 = (): any => {
    return {
      "headerTitle": "News",
      "items": [
        {
            "id": 1,
            "title": "Classical guitar",
            "subtitle": "Category: Guitars",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/27.jpg",
            "priceText": "Price",
            "price": "$144.50",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 2,
            "title": "Electric Guitars",
            "subtitle": "Category: Guitars",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/28.jpg",
            "priceText": "Price",
            "price": "$130.99",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 3,
            "title": "Acoustic Guitars",
            "subtitle": "Category: Guitars",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/23.jpg",
            "priceText": "Price",
            "price": "$354.05",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 4,
            "title": "Bass guitar",
            "subtitle": "Category: Guitars",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/24.jpg",
            "priceText": "Price",
            "price": "$338.99",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 5,
            "title": "Android Watch",
            "subtitle": "Category: Watch",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/14.jpg",
            "priceText": "Price",
            "price": "$109.60",
            "button": "Buy",
            "shareIcon": "more"
        },
      ]
    };
  }

  getDataForTab9 = (): any => {
    return {
      "headerTitle": "News",
      "items": [
        {
            "id": 1,
            "title": "Shoes Brown",
            "subtitle": "Category: Shoes",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/26.jpg",
            "priceText": "Price",
            "price": "$144.50",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 2,
            "title": "Red Purse",
            "subtitle": "Category: Women's Purses",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/22.jpg",
            "priceText": "Price",
            "price": "$130.99",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 3,
            "title": "Hats Black",
            "subtitle": "Category: Hats",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/37.jpg",
            "priceText": "Price",
            "price": "$354.05",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 4,
            "title": "T-shirts Black",
            "subtitle": "Category: T-shirts",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/19.jpg",
            "priceText": "Price",
            "price": "$338.99",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 5,
            "title": "T-shirts Blue",
            "subtitle": "Category: T-shirts",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/12.jpg",
            "priceText": "Price",
            "price": "$109.60",
            "button": "Buy",
            "shareIcon": "more"
        },
      ]
    };
  }

  getDataForTab10 = (): any => {
    return {
      "headerTitle": "News",
      "items": [
        {
            "id": 1,
            "title": "Big Watch",
            "subtitle": "Category: Watch",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/34.jpg",
            "priceText": "Price",
            "price": "$144.50",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 2,
            "title": "Gold Watch",
            "subtitle": "Category: Watch",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/13.jpg",
            "priceText": "Price",
            "price": "$130.99",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 3,
            "title": "Android Watch",
            "subtitle": "Category: Watch",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/3.jpg",
            "priceText": "Price",
            "price": "$354.05",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 4,
            "title": "Black Watch",
            "subtitle": "Category: Watch",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/14.jpg",
            "priceText": "Price",
            "price": "$338.99",
            "button": "Buy",
            "shareIcon": "more"
        },
        {
            "id": 5,
            "title": "iMac Pro",
            "subtitle": "Category: MacBook",
            "description": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            "image": "assets/images/background/4.jpg",
            "priceText": "Price",
            "price": "$109.60",
            "button": "Buy",
            "shareIcon": "more"
        },
      ]
    };
  }

  /** Settings Tabs Header tab - text  **/

  getDataForTab11 = (): any => {
    return {
      "items": [
        {
          "title": "Violeta Barros",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/24.jpg"
        },
        {
          "title": "Ariana Barros",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/11.jpg"
        },
        {
          "title": "Juliana Henriques",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "price": "get",
          "avatar": "assets/images/avatar/13.jpg"
        },
        {
          "title": "Isabel Anguiano",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/15.jpg"
        },
        {
          "title": "Benedita Abreu",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/17.jpg"
        },
        {
          "title": "Maria Cardenas",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/19.jpg"
        },
        {
          "title": "Luis Saavedra",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/21.jpg"
        }
      ]
    };
  }

  getDataForTab12 = (): any => {
    return {
      "items": [
        {
          "title": "Fernando Ortíz",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/23.jpg"
        },
        {
          "title": "Nia Gutkowski",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/24.jpg"
        },
        {
          "title": "Lucas Schultz",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/22.jpg"
        },
        {
          "title": "Camila Hintz",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/20.jpg"
        },
        {
          "title": "Silvia Correa",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/18.jpg"
        },
        {
          "title": "Anna Yost",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/16.jpg"
        },
        {
          "title": "Teresa Puga",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/14.jpg"
        }
      ]
    };
  }

  getDataForTab13 = (): any => {
    return {
      "items": [
        {
          "title": "Eula Wolff",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/24.jpg"
        },
        {
          "title": "Velda White",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/23.jpg"
        },
        {
          "title": "Daniela Bustamante",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/10.jpg"
        },
        {
          "title": "Patricia Flórez",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/11.jpg"
        },
        {
          "title": "Viola Bauch",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/12.jpg"
        },
        {
          "title": "Helena Garibay",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/13.jpg"
        },
        {
          "title": "Martina Brito",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/14.jpg"
        }
      ]
    };
  }

  getDataForTab14 = (): any => {
    return {
      "items": [
        {
          "title": "Aya Gaona",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/15.jpg"
        },
        {
          "title": "Yasmine Hassan",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/16.jpg"
        },
        {
          "title": "Livia Koning",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/17.jpg"
        },
        {
          "title": "Sara Varela",
          "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "price": "get",
          "avatar": "assets/images/avatar/18.jpg"
        }
      ]
    };
  }

  getDataForLayout1 = (): Array<any> => {
    return [];
  };

  getDataForLayout2 = (): Array<any> => {
    return [];
  };

  getDataForLayout3 = (): Array<any> => {
    return [];
  };

  getEventsForTheme = (menuItem: any): any => {
    var that = this;
    return {
      'onItemClick': function(item: any) {
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
  };

  load(item: any): Observable<any> {
    var that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
        return new Observable(observer => {
            this.af
              .object('tab/' + item)
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
