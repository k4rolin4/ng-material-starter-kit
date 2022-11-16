import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'create-product', component: ProductFormComponent }, { path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoriesListComponent }, { path: 'crypto', component: CryptoListComponent }]), ProductFormComponentModule, ProductServiceModule, ProductListComponentModule, ProductsServiceModule, CategoriesListComponentModule, CategoriesServiceModule, CryptoListComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
