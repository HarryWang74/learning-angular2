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
  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this.products = this._productService.getProducts();
  }


  toggleImage(): void{
    this.showImage = !this.showImage;
  }
}
