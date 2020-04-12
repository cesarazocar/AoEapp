import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {


  

  private REST_API_SERVER = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";

  constructor(private httpClient:HttpClient) { }


  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
    
  }

  getUnits() {
    return this.httpClient.get('/api/food');
}
}
