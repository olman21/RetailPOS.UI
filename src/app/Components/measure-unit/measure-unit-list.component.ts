import { Component, OnInit } from '@angular/core';
import {MeasureUnit} from "../../Models";
import {Observable} from "rxjs";
import {MeasureUnitService} from "../../Services";

@Component({
  selector: 'app-measure-unit-list',
  templateUrl: 'measure-unit-list.component.html'
})
export class MeasureUnitListComponent implements OnInit {

  constructor(private api: MeasureUnitService) { }

  public measureUnits: Observable<MeasureUnit[]>;
  ngOnInit() {
    this.measureUnits = this.api.GetAll();

    this.api.saveState.subscribe((res: MeasureUnit)=>{
      console.log('saveState')
      this.measureUnits =  this.api.GetAll();
    });


  }

}
