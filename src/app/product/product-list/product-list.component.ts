import { Component, OnInit } from '@angular/core';
import { IProduct } from '../i-product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  showImage: boolean = false;
  productsFilter: string = "";
  products: IProduct[];
  errorMessage: string;
  clickMessage: string;
  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this._productService.getProducts().subscribe(
        products =>this.products = products,
        error => this.errorMessage = <any>error
    );
  }

  onRatingClicked(message: string): void{
    this.clickMessage = message;
    alert(this.clickMessage);
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
}
