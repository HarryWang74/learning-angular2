import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){ }

  ngOnInit() {
    // 用 snapshot 静态取 id, id 要和 router config 里设置的名字一致
    let id=+this._route.snapshot.params['id'];
    // 在页面里显示 id
    this.pageTitle =`${id}`;
  }

  onBack(): void{
    this._router.navigate(['/products']);
  }

}
