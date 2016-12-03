import { Routes, RouterModule } from '@angular/router';
import {LoginComponent,
        DashboardComponent,
        OrdersComponent,
        PaymentMethodsComponent,
        ProductsComponent,
        ProductListComponent,
        CategoriesComponent,
        MeasureUnitComponent,
        ContactsComponent,
        ContactMethodTypesComponent,
        ConfigSettingsComponent} from './Components';
import {MEASUREUNIT_ROUTES} from "./Components/measure-unit/measure-unit.routes";

const APP_ROUTES: Routes = [
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Orders', component: OrdersComponent},
  {path: 'PaymentMethods', component: PaymentMethodsComponent},
  {path: 'Products', component: ProductListComponent},
  {path: 'Products/:id', component: ProductsComponent },
  {path: 'Categories', component: CategoriesComponent},
  {path: 'MeasureUnits', component: MeasureUnitComponent, children: MEASUREUNIT_ROUTES },
  {path: 'MeasureUnits/:id', component: MeasureUnitComponent, children: MEASUREUNIT_ROUTES },
  {path: 'Contacts', component: ContactsComponent},
  {path: 'ContactMethodTypes', component: ContactMethodTypesComponent},
  {path: 'ConfigSettings', component: ConfigSettingsComponent},
  {path: '', component: LoginComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
