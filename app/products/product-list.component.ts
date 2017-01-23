import {Component} from '@angular/core';
    

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})

export class ProductListComponent{
    pageTitle: string = 'Product List';
    imageWidth:number = 80;
    imageMargin:number=2;
    showImage: boolean=false;
    listFilter:string = 'Tapes';
    products: any[] =[{
                         "productId": 1,
                         "productName":"Shipping Tapes 55 Yards",
                         "productCode": "001122",
                         "realeaseDate": "March 18 2016",
                         "decription": "Very Good quality... of 55 Yards Tapes",
                         "price" : 25.00,
                         "starRating": 4.9,
                         "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/414Q%2Brhn5%2BL._SX300_.jpg"
                       },
                       {
                           "productId": 1,
                         "productName":"Shipping Tapes 110 Yards",
                         "productCode": "001560",
                         "realeaseDate": "December 18 2016",
                         "decription": "Very Good quality... of 100 Yards Tapes",
                         "price" : 30.00,
                         "starRating": 4.8,
                         "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/414Q%2Brhn5%2BL._SX300_.jpg"
                       }];
     toggleImage():void{
                            this.showImage= !this.showImage;
                       }
}
