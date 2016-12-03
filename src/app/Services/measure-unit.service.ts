import { Injectable } from '@angular/core';
import {RestService} from "./rest.service";
import {Observable, Subject} from "rxjs";
import {MeasureUnit} from "../Models";
import {ApiEndpoints} from "../config";

@Injectable()
export class MeasureUnitService {

  constructor(private api: RestService) {
    this.saveStateSubject = new Subject<MeasureUnit>();
    this.saveState = this.saveStateSubject.asObservable();

  }

  saveState: Observable<MeasureUnit>;
  private saveStateSubject: Subject<MeasureUnit>;

  public GetAll() : Observable<MeasureUnit[]>{
    return this.api.get<MeasureUnit[]>(ApiEndpoints.measureUnit);
  }
  public Get(id:number) : Observable<MeasureUnit>{
    return this.api.get<MeasureUnit>(`${ApiEndpoints.measureUnit}/${id}`);
  }

  public Post(measureUnit: MeasureUnit) : Observable<MeasureUnit>{
    return this.api.post<MeasureUnit>(ApiEndpoints.measureUnit,measureUnit);
  }
  public Put(measureUnit: MeasureUnit) : Observable<any>{
    return this.api.put(`${ApiEndpoints.measureUnit}/${measureUnit.measureID}`,measureUnit);
  }

  public Delete(id:number) : Observable<any>{
    return this.api.delete(`${ApiEndpoints.measureUnit}/${id}`);
  }

  public notifySaveChanges(measureUnit: MeasureUnit) : void{
    this.saveStateSubject.next(measureUnit);
  }

}
