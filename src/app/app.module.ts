import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import{ HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductGuardService } from './product/product-guard.service';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductFilterPipe } from './product/product-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', canActivate: [ProductGuardService], component: ProductDetailComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
  ],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
