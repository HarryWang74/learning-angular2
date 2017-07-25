import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()

export class ProductGuardService implements CanActivate{

  constructor(private _router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
      // /product/id
      // route.url[0] 是 product
      // route.url[1] 是 id
      let id = +route.url[1].path;
      if (isNaN(id) || id < 1) {
          alert('Invalid product Id');
          // start a new navigation to redirect to list page
          this._router.navigate(['/products']);
          // abort current navigation
          return false;
      };
      return true;
  }
}
