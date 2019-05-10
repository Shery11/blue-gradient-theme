import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings'
import { LoadingService } from './loading-service'

@Injectable()
export class ImageGalleryService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) {}

    getId = ():string => 'imageGallery';

    getTitle = ():string => 'Image Gallery';

    getAllThemes = (): Array<any> => {
      return [
        {"title" : "Full gallery 1", "theme"  : "layout1"},
        {"title" : "Thumb grid", "theme"  : "subcategory"},
        {"title" : "Full gallery 2", "theme"  : "layout3"}
      ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
      return this[
                'getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)
      ]();
    };

    // IMAGES-GALLARY - Full gallery 1 data
    getDataForLayout1 = (): any => {
        return {
            "items": [
                {
                    "id": 1,
                    "title": "Art",
                    "image": "assets/images/gallery/full-gallery-content-1/0.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/full-gallery-content-1/1.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/full-gallery-content-1/2.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/full-gallery-content-1/3.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/full-gallery-content-1/4.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/full-gallery-content-1/5.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/full-gallery-content-1/6.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/full-gallery-content-1/7.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/full-gallery-content-1/8.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/full-gallery-content-1/9.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/full-gallery-content-1/3.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/full-gallery-content-1/4.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/full-gallery-content-1/6.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/full-gallery-content-1/8.jpg"
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": "Bridge",
                    "image": "assets/images/gallery/full-gallery-content-2/0.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/full-gallery-content-2/2.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/full-gallery-content-2/3.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/full-gallery-content-2/4.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/full-gallery-content-2/5.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/full-gallery-content-2/6.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/full-gallery-content-2/7.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/full-gallery-content-2/8.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/full-gallery-content-2/9.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/full-gallery-content-2/1.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/full-gallery-content-2/3.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/full-gallery-content-2/5.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/full-gallery-content-2/7.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/full-gallery-content-2/9.jpg"
                        }
                    ]
                },
                {
                    "id": 3,
                    "title": "Camera",
                    "image": "assets/images/gallery/full-gallery-content-3/0.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/full-gallery-content-3/1.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/full-gallery-content-3/2.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/full-gallery-content-3/3.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/full-gallery-content-3/4.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/full-gallery-content-3/5.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/full-gallery-content-3/6.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/full-gallery-content-3/7.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/full-gallery-content-3/8.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/full-gallery-content-3/9.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/full-gallery-content-3/10.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/full-gallery-content-3/11.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/full-gallery-content-3/12.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/full-gallery-content-3/13.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/full-gallery-content-3/14.jpg"
                        }
                    ]
                },
                {
                    "id": 4,
                    "title": "Hot Air Balloon",
                    "image": "assets/images/gallery/full-gallery-content-4/0.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/full-gallery-content-4/1.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/full-gallery-content-4/2.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/full-gallery-content-4/3.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/full-gallery-content-4/4.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/full-gallery-content-4/5.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/full-gallery-content-4/6.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/full-gallery-content-4/7.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/full-gallery-content-4/8.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/full-gallery-content-4/9.jpg"
                        }
                    ]
                },
                {
                    "id": 5,
                    "title": "boat",
                    "image": "assets/images/gallery/full-gallery-content-5/0.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/full-gallery-content-5/1.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/full-gallery-content-5/2.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/full-gallery-content-5/3.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/full-gallery-content-5/4.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/full-gallery-content-5/5.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/full-gallery-content-5/6.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/full-gallery-content-5/7.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/full-gallery-content-5/8.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/full-gallery-content-5/9.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/full-gallery-content-5/1.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/full-gallery-content-5/3.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/full-gallery-content-5/5.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/full-gallery-content-5/6.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/full-gallery-content-5/7.jpg"
                        },
                        {
                            "id": 15,
                            "image": "assets/images/gallery/full-gallery-content-5/8.jpg"
                        }
                    ]
                },
                {
                    "id": 6,
                    "title": "preamps",
                    "image": "assets/images/gallery/full-gallery-content-6/0.jpg",
                    "favorite": true,
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/full-gallery-content-6/1.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/full-gallery-content-6/10.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/full-gallery-content-6/2.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/full-gallery-content-6/3.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/full-gallery-content-6/4.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/full-gallery-content-6/5.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/full-gallery-content-6/6.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/full-gallery-content-6/7.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/full-gallery-content-6/8.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/full-gallery-content-6/9.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/full-gallery-content-6/10.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/full-gallery-content-6/3.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/full-gallery-content-6/2.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/full-gallery-content-6/4.jpg"
                        },
                        {
                            "id": 15,
                            "image": "assets/images/gallery/full-gallery-content-6/5.jpg"
                        },
                        {
                            "id": 16,
                            "image": "assets/images/gallery/full-gallery-content-6/6.jpg"
                        },
                        {
                            "id": 17,
                            "image": "assets/images/gallery/full-gallery-content-6/1.jpg"
                        }
                    ]
                },
                {
                    "id": 7,
                    "title": "furniture",
                    "image": "assets/images/gallery/full-gallery-content-7/0.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/full-gallery-content-7/3.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/full-gallery-content-7/5.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/full-gallery-content-7/4.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/full-gallery-content-7/2.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/full-gallery-content-7/1.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/full-gallery-content-7/6.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/full-gallery-content-7/7.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/full-gallery-content-7/8.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/full-gallery-content-7/9.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/full-gallery-content-7/0.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/full-gallery-content-7/1.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/full-gallery-content-7/3.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/full-gallery-content-7/6.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/full-gallery-content-7/9.jpg"
                        }
                    ]
                },
                {
                    "id": 8,
                    "title": "Travel",
                    "image": "assets/images/gallery/full-gallery-content-8/0.jpg",
                    "items": [
                        {
                            "id": 1,
                            "image": "assets/images/gallery/full-gallery-content-8/1.jpg"
                        },
                        {
                            "id": 2,
                            "image": "assets/images/gallery/full-gallery-content-8/2.jpg"
                        },
                        {
                            "id": 3,
                            "image": "assets/images/gallery/full-gallery-content-8/12.jpg"
                        },
                        {
                            "id": 4,
                            "image": "assets/images/gallery/full-gallery-content-8/13.jpg"
                        },
                        {
                            "id": 5,
                            "image": "assets/images/gallery/full-gallery-content-8/16.jpg"
                        },
                        {
                            "id": 6,
                            "image": "assets/images/gallery/full-gallery-content-8/15.jpg"
                        },
                        {
                            "id": 7,
                            "image": "assets/images/gallery/full-gallery-content-8/5.jpg"
                        },
                        {
                            "id": 8,
                            "image": "assets/images/gallery/full-gallery-content-8/16.jpg"
                        },
                        {
                            "id": 9,
                            "image": "assets/images/gallery/full-gallery-content-8/11.jpg"
                        },
                        {
                            "id": 10,
                            "image": "assets/images/gallery/full-gallery-content-8/12.jpg"
                        },
                        {
                            "id": 11,
                            "image": "assets/images/gallery/full-gallery-content-8/10.jpg"
                        },
                        {
                            "id": 12,
                            "image": "assets/images/gallery/full-gallery-content-8/3.jpg"
                        },
                        {
                            "id": 13,
                            "image": "assets/images/gallery/full-gallery-content-8/2.jpg"
                        },
                        {
                            "id": 14,
                            "image": "assets/images/gallery/full-gallery-content-8/4.jpg"
                        },
                        {
                            "id": 15,
                            "image": "assets/images/gallery/full-gallery-content-8/5.jpg"
                        }
                    ]
                }
            ]
        };
      };

      // IMAGES-GALLARY - Thumb grid data
      getDataForSubcategory = (): any => {
          return {
              "items": [
                  {
                      "id": 1,
                      "image": "assets/images/gallery/thumb-grid/1.jpg"
                  },
                  {
                      "id": 2,
                      "image": "assets/images/gallery/thumb-grid/2.jpg"
                  },
                  {
                      "id": 3,
                      "image": "assets/images/gallery/thumb-grid/3.jpg"
                  },
                  {
                      "id": 4,
                      "image": "assets/images/gallery/thumb-grid/4.jpg"
                  },
                  {
                      "id": 5,
                      "image": "assets/images/gallery/thumb-grid/5.jpg"
                  },
                  {
                      "id": 6,
                      "image": "assets/images/gallery/thumb-grid/6.jpg"
                  },
                  {
                      "id": 7,
                      "image": "assets/images/gallery/thumb-grid/7.jpg"
                  },
                  {
                      "id": 8,
                      "image": "assets/images/gallery/thumb-grid/8.jpg"
                  },
                  {
                      "id": 9,
                      "image": "assets/images/gallery/thumb-grid/9.jpg"
                  },
                  {
                      "id": 10,
                      "image": "assets/images/gallery/thumb-grid/10.jpg"
                  },
                  {
                      "id": 11,
                      "image": "assets/images/gallery/thumb-grid/11.jpg"
                  },
                  {
                      "id": 12,
                      "image": "assets/images/gallery/thumb-grid/12.jpg"
                  },
                  {
                      "id": 13,
                      "image": "assets/images/gallery/thumb-grid/13.jpg"
                  },
                  {
                      "id": 14,
                      "image": "assets/images/gallery/thumb-grid/14.jpg"
                  },
                  {
                      "id": 15,
                      "image": "assets/images/gallery/thumb-grid/15.jpg"
                  },
                  {
                      "id": 16,
                      "image": "assets/images/gallery/thumb-grid/16.jpg"
                  }
              ]
          };
      };

      // IMAGES-GALLARY - Full gallery 2 data
      getDataForLayout3 = ():any => {
          return {
              "items": [
                  {
                      "id": 1,
                      "title": "Art",
                      "subtitle": "Friday, August 07, 2017",
                      "image": "assets/images/gallery/full-gallery-content-1/10.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/full-gallery-content-1/1.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/full-gallery-content-1/2.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/full-gallery-content-1/3.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/full-gallery-content-1/4.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/full-gallery-content-1/5.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/full-gallery-content-1/6.jpg"
                          }
                      ]
                  },
                  {
                      "id": 2,
                      "title": "Bridge",
                      "subtitle": "Wednesday, July 05, 2017",
                      "image": "assets/images/gallery/full-gallery-content-2/4.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/full-gallery-content-2/2.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/full-gallery-content-2/4.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/full-gallery-content-2/6.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/full-gallery-content-2/8.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/full-gallery-content-2/10.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/full-gallery-content-2/9.jpg"
                          },
                          {
                              "id": 7,
                              "image": "assets/images/gallery/full-gallery-content-2/1.jpg"
                          },
                          {
                              "id": 8,
                              "image": "assets/images/gallery/full-gallery-content-2/3.jpg"
                          },
                          {
                              "id": 9,
                              "image": "assets/images/gallery/full-gallery-content-2/5.jpg"
                          },
                          {
                              "id": 10,
                              "image": "assets/images/gallery/full-gallery-content-2/7.jpg"
                          },
                          {
                              "id": 11,
                              "image": "assets/images/gallery/full-gallery-content-2/10.jpg"
                          },
                          {
                              "id": 12,
                              "image": "assets/images/gallery/full-gallery-content-2/9.jpg"
                          },
                          {
                              "id": 13,
                              "image": "assets/images/gallery/full-gallery-content-2/8.jpg"
                          },
                          {
                              "id": 14,
                              "image": "assets/images/gallery/full-gallery-content-2/7.jpg"
                          }
                      ]
                  },
                  {
                      "id": 3,
                      "title": "Camera",
                      "subtitle": "Sunday, October 08, 2016",
                      "image": "assets/images/gallery/full-gallery-content-3/1.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/full-gallery-content-3/8.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/full-gallery-content-3/7.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/full-gallery-content-3/6.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/full-gallery-content-3/5.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/full-gallery-content-3/4.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/full-gallery-content-3/3.jpg"
                          },
                          {
                              "id": 7,
                              "image": "assets/images/gallery/full-gallery-content-3/2.jpg"
                          },
                          {
                              "id": 8,
                              "image": "assets/images/gallery/full-gallery-content-3/1.jpg"
                          }
                      ]
                  },
                  {
                      "id": 4,
                      "title": "Hot Air Balloon",
                      "subtitle": "Monday, June 26, 2017",
                      "image": "assets/images/gallery/full-gallery-content-4/1.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/full-gallery-content-4/1.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/full-gallery-content-4/2.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/full-gallery-content-4/3.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/full-gallery-content-4/4.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/full-gallery-content-4/5.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/full-gallery-content-4/6.jpg"
                          },
                          {
                              "id": 7,
                              "image": "assets/images/gallery/full-gallery-content-4/7.jpg"
                          },
                          {
                              "id": 8,
                              "image": "assets/images/gallery/full-gallery-content-4/8.jpg"
                          },
                          {
                              "id": 9,
                              "image": "assets/images/gallery/full-gallery-content-4/9.jpg"
                          }
                      ]
                  },
                  {
                      "id": 5,
                      "title": "boat",
                      "subtitle": "Thursday, May 19, 2016",
                      "image": "assets/images/gallery/full-gallery-content-5/1.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/full-gallery-content-5/1.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/full-gallery-content-5/9.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/full-gallery-content-5/8.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/full-gallery-content-5/7.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/full-gallery-content-5/6.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/full-gallery-content-5/5.jpg"
                          },
                          {
                              "id": 7,
                              "image": "assets/images/gallery/full-gallery-content-5/4.jpg"
                          },
                          {
                              "id": 8,
                              "image": "assets/images/gallery/full-gallery-content-5/3.jpg"
                          },
                          {
                              "id": 9,
                              "image": "assets/images/gallery/full-gallery-content-5/2.jpg"
                          },
                          {
                              "id": 10,
                              "image": "assets/images/gallery/full-gallery-content-5/1.jpg"
                          },
                          {
                              "id": 11,
                              "image": "assets/images/gallery/full-gallery-content-5/0.jpg"
                          }
                      ]
                  },
                  {
                      "id": 6,
                      "title": "preamps",
                      "subtitle": "Monday, September 01, 2016",
                      "image": "assets/images/gallery/full-gallery-content-6/10.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/full-gallery-content-6/1.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/full-gallery-content-6/2.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/full-gallery-content-6/3.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/full-gallery-content-6/4.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/full-gallery-content-6/5.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/full-gallery-content-6/6.jpg"
                          }
                      ]
                  },
                  {
                      "id": 7,
                      "title": "furniture",
                      "subtitle": "Tuesday, September 05, 2016",
                      "image": "assets/images/gallery/full-gallery-content-7/7.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/full-gallery-content-7/0.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/full-gallery-content-7/2.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/full-gallery-content-7/3.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/full-gallery-content-7/5.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/full-gallery-content-7/6.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/full-gallery-content-7/7.jpg"
                          }
                      ]
                  },
                  {
                      "id": 8,
                      "title": "Travel",
                      "subtitle": "Saturday, April 25, 2016",
                      "image": "assets/images/gallery/full-gallery-content-8/12.jpg",
                      "items": [
                          {
                              "id": 1,
                              "image": "assets/images/gallery/full-gallery-content-8/1.jpg"
                          },
                          {
                              "id": 2,
                              "image": "assets/images/gallery/full-gallery-content-8/3.jpg"
                          },
                          {
                              "id": 3,
                              "image": "assets/images/gallery/full-gallery-content-8/2.jpg"
                          },
                          {
                              "id": 4,
                              "image": "assets/images/gallery/full-gallery-content-8/5.jpg"
                          },
                          {
                              "id": 5,
                              "image": "assets/images/gallery/full-gallery-content-8/4.jpg"
                          },
                          {
                              "id": 6,
                              "image": "assets/images/gallery/full-gallery-content-8/6.jpg"
                          },
                          {
                              "id": 7,
                              "image": "assets/images/gallery/full-gallery-content-8/7.jpg"
                          },
                          {
                              "id": 8,
                              "image": "assets/images/gallery/full-gallery-content-8/8.jpg"
                          },
                          {
                              "id": 9,
                              "image": "assets/images/gallery/full-gallery-content-8/10.jpg"
                          }
                      ]
                  }
              ]
          };
      };

    getEventsForTheme = (menuItem: any): any => {
      return {};
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

    getShowItemId = (item: any):string => {
        console.log(this.getId()  + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1));
        return this.getId()  + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    }

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('imageGallery/' + item.theme)
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
