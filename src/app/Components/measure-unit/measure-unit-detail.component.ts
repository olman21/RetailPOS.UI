import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MeasureUnitService} from "../../Services";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {MeasureUnit} from "../../Models/MeasureUnit";

@Component({
  selector: 'app-measure-unit',
  templateUrl: 'measure-unit-detail.component.html'
})
export class MeasureUnitDetailComponent implements OnInit, OnDestroy {

  constructor(public fb: FormBuilder, private api: MeasureUnitService, private activeRoute: ActivatedRoute) { }

  public form = this.fb.group({
    name: ["", Validators.required],
    symbol: ["", Validators.required],
    measureID: ["0"]
  });
  private routeSubs:Subscription;

  public saveMeasureUnit(){
    if(this.form.valid){
      let measureUnit: MeasureUnit = <MeasureUnit>this.form.value;
      if(!measureUnit.measureID)
        this.api.Post(measureUnit).subscribe((measureUnit: MeasureUnit)=> this.api.notifySaveChanges(measureUnit));
      else
        this.api.Put(measureUnit).subscribe(()=> this.api.notifySaveChanges(measureUnit));
    }
  }

  ngOnInit() {
    this.routeSubs = this.activeRoute.parent.params.subscribe((params:any)=> {
      let id = params['id'];
      if(id){
        this.api.Get(id)
          .subscribe((measureUnit: MeasureUnit)=>{
            this.form = this.fb.group({
              name: [measureUnit.name, Validators.required],
              symbol: [measureUnit.symbol, Validators.required],
              measureID: [measureUnit.measureID]
            });
          });
      }
    });
  }

  ngOnDestroy(){
    this.routeSubs.unsubscribe();
  }

}
