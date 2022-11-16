import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { PublicHolidaysListComponent } from './components/public-holidays-list/public-holidays-list.component';
import { CheckboxCategoriesListComponent } from './components/checkbox-categories-list/checkbox-categories-list.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysListComponentModule } from './components/public-holidays-list/public-holidays-list.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CheckboxCategoriesListComponentModule } from './components/checkbox-categories-list/checkbox-categories-list.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { LoginServiceModule } from './services/login.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'create-product', component: ProductFormComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'categories', component: CategoriesListComponent },
      { path: 'crypto', component: CryptoListComponent },
      { path: 'public-holidays', component: PublicHolidaysListComponent },
      {
        path: 'checkbox-categories',
        component: CheckboxCategoriesListComponent,
      },
      { path: 'categories-menu', component: CategoriesMenuComponent },
      { path: 'create-employee', component: EmployeeFormComponent },
      { path: 'login', component: LoginFormComponent },
    ]),
    ProductFormComponentModule,
    ProductServiceModule,
    ProductListComponentModule,
    ProductsServiceModule,
    CategoriesListComponentModule,
    CategoriesServiceModule,
    CryptoListComponentModule,
    CryptoServiceModule,
    PublicHolidaysListComponentModule,
    PublicHolidaysServiceModule,
    CheckboxCategoriesListComponentModule,
    CategoriesMenuComponentModule,
    EmployeeFormComponentModule,
    EmployeeServiceModule,
    LoginFormComponentModule,
    LoginServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
