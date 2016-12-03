import {Routes} from "@angular/router";
import {MeasureUnitDetailComponent} from "./measure-unit-detail.component";

export const MEASUREUNIT_ROUTES: Routes = [
  { path:'edit', component: MeasureUnitDetailComponent},
  { path:'new', component: MeasureUnitDetailComponent},
  { path:'', component: undefined}
];
