import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
url = "http://localhost:3000/products";
url1 ="http://localhost:3000/electronics";

  constructor(private http:HttpClient) { }

  user = new BehaviorSubject(false);
  admin = new BehaviorSubject(false);

  getList(){
    return this.http.get(this.url);
  }

  saveList(data:any){
    return this.http.post(this.url, data);
  }

  deleteList(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentProduct(id:any){
    return this.http.get(`${this.url}/${id}`);
  }

  updateList(id:any, data:any){
    return this.http.put(`${this.url}/${id}`,data);
  }
 
 // ---------------------------------------------------------------------------------------------------
 getElectronicList(){
  return this.http.get(this.url1);
}

saveElectronicList(data:any){
  return this.http.post(this.url1, data);
}

deleteElectronicList(id:any){
  return this.http.delete(`${this.url1}/${id}`);
}

getCurrentElectronicProduct(id:any){
  return this.http.get(`${this.url1}/${id}`);
}

updateElectronicList(id:any, data:any){
  return this.http.put(`${this.url1}/${id}`,data);
}

}
