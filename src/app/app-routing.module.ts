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
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RandomActivitiesComponent } from './components/random-activities/random-activities.component';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { FilteredProductListSubjectComponent } from './components/filtered-product-list-subject/filtered-product-list-subject.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
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
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { UserServiceModule } from './services/user.service-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatServiceModule } from './services/cat.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { AgePredictionServiceModule } from './services/age-prediction.service-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductDetailsServiceModule } from './services/product-details.service-module';
import { CartDetailsComponentModule } from './components/cart-details/cart-details.component-module';
import { CartDetailsServiceModule } from './services/cart-details.service-module';
import { UserDetailsComponentModule } from './components/user-details/user-details.component-module';
import { UserDetailsServiceModule } from './services/user-details.service-module';
import { RandomActivitiesComponentModule } from './components/random-activities/random-activities.component-module';
import { BoredServiceModule } from './services/bored.service-module';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { FilteredProductListSubjectComponentModule } from './components/filtered-product-list-subject/filtered-product-list-subject.component-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { EmployeesListComponentModule } from './components/employees-list/employees-list.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'create-product', component: ProductFormComponent },
      { path: 'products-list', component: ProductListComponent },
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
      { path: 'register', component: RegisterFormComponent },
      { path: 'cat-fact', component: CatFactComponent },
      { path: 'age/:name', component: AgePredictionComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'cart/:id', component: CartDetailsComponent },
      { path: 'user/:id', component: UserDetailsComponent },
      { path: 'random-activity', component: RandomActivitiesComponent },
      { path: 'products/:category', component: FilteredProductListComponent },
      { path: 'products', component: FilteredProductListSubjectComponent },
      { path: 'sorted-products', component: SortedProductListComponent },
      { path: 'employees', component: EmployeesListComponent },
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
    RegisterFormComponentModule,
    UserServiceModule,
    CatFactComponentModule,
    CatServiceModule,
    AgePredictionComponentModule,
    AgePredictionServiceModule,
    ProductDetailsComponentModule,
    ProductDetailsServiceModule,
    CartDetailsComponentModule,
    CartDetailsServiceModule,
    UserDetailsComponentModule,
    UserDetailsServiceModule,
    RandomActivitiesComponentModule,
    BoredServiceModule,
    FilteredProductListComponentModule,
    FilteredProductListSubjectComponentModule,
    SortedProductListComponentModule,
    EmployeesListComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
