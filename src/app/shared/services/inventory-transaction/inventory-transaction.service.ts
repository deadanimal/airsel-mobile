import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Form } from "@angular/forms";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { InventoryTransactionModel } from "./inventory-transaction.model";

@Injectable({
  providedIn: "root",
})
export class InventoryTransactionService {
  url: string = environment.baseUrl + "v1/inventory-transaction/";

  // Data
  public ormodels: InventoryTransactionModel[] = [];
  public ormodel: InventoryTransactionModel;

  constructor(private http: HttpClient) { }

  post(body: Form): Observable<InventoryTransactionModel> {
    return this.http.post<any>(this.url, body).pipe(
      tap((res) => {
        console.log("InventoryTransactionModel", res);
      })
    );
  }

  get(): Observable<InventoryTransactionModel[]> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => {
        console.log("InventoryTransactionModel", res);
        this.ormodels = res;
      })
    );
  }

  getOne(id: string): Observable<InventoryTransactionModel> {
    let urlID = this.url + id + "/";
    return this.http.get<InventoryTransactionModel>(urlID).pipe(
      tap((res: InventoryTransactionModel) => {
        console.log("InventoryTransactionModel", res);
        this.ormodel = res;
      })
    );
  }

  update(id: string, body: Form): Observable<InventoryTransactionModel> {
    return this.http.patch<InventoryTransactionModel>(this.url + id + '/', body).pipe(
      tap((res) => {
        console.log("InventoryTransactionModel", res);
      })
    );
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.url + id + "/").pipe(
      tap((res) => {
        console.log("InventoryTransactionModel", res);
      })
    );
  }

  filter(field: string): Observable<InventoryTransactionModel[]> {
    let urlFilter = this.url + "?" + field;
    return this.http.get<InventoryTransactionModel[]>(urlFilter).pipe(
      tap((res) => {
        console.log("InventoryTransactionModel", res);
      })
    );
  }
}
