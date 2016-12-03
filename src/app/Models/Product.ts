import {MeasureUnit} from "./MeasureUnit";
export class Product {
  public productID: string;

  public name: string;

  public description: string;

  public cost: number;

  public preTaxPrice: number;

  public price: number;

  public qty: number;

  public defaultPercentDiscount: number;

  public measureID: number;

  public barCode: string;

  public categoryID: number;

  public lot: string;

  public expirationDate: Date;

  public measureUnit: MeasureUnit;
}
