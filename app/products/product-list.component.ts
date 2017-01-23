import {Component} from '@angular/core';
    

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})

export class ProductListComponent{
    pageTitle: string = 'Product List';
    products: any[] =[{
                         "productId": 1,
                         "productName":"Shipping Tapes",
                         "productCode": "001122",
                         "realeaseDate": "March 18 2016",
                         "decription": "Very Good quality... of 100 Yards Tapes",
                         "price" : 25.00,
                         "starRating": 4.9,
                         "imageUrl": "abc"
                       },
                       {
                           "productId": 1,
                         "productName":"Shipping Tapes",
                         "productCode": "001122",
                         "realeaseDate": "March 18 2016",
                         "decription": "Very Good quality... of 100 Yards Tapes",
                         "price" : 25.00,
                         "starRating": 4.9,
                         "imageUrl": "abc"
                       }];
}
