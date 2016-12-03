import { BrowserModule } from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {routing} from './app.routing';
import {LocalStorageService,
        LoginService,
        RestService,
        ProductService,
        UserService,
        MeasureUnitService} from './Services';

import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { OrdersComponent,
          PaymentMethodsComponent,
          ProductsComponent,
          CategoriesComponent,
          ContactsComponent,
          ContactMethodTypesComponent,
          ConfigSettingsComponent,
          UsersComponent,
          NavBarComponent,
          MeasureUnitComponent,
          MeasureUnitListComponent,
          MeasureUnitDetailComponent,
          ProductListComponent
        } from './Components';
import 'chart.js';
import { ChartsModule  } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavBarComponent,
    OrdersComponent,
    PaymentMethodsComponent,
    ProductsComponent,
    MeasureUnitDetailComponent,
    CategoriesComponent,
    ContactsComponent,
    ContactMethodTypesComponent,
    ConfigSettingsComponent,
    UsersComponent,
    MeasureUnitListComponent,
    MeasureUnitComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    DropdownModule,
    ChartsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "en-CR" },
    LocalStorageService,
    LoginService,
    RestService,
    ProductService,
    UserService,
    MeasureUnitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
