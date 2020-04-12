import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  API = 'api/v1';
  constructor(private http: HttpClient) { }
  getCivilizations() {
    return this.http.get(`${this.API}/civilizations`)
  }

  getCivilization(id: string) {
    return this.http.get(`${this.API}/civilization/${id}`);
  }

  getUnits() {
    return this.http.get(`${this.API}/units`);
  }

  getUnit(id: string) {
    return this.http.get(`${this.API}/unit/${id}`);
  }

  getStructures() {
    return this.http.get(`${this.API}/structures`);
  }

  getStructure(id: string) {
    return this.http.get(`${this.API}/structure/${id}`);
  }

  getTechnologies() {
    return this.http.get(`${this.API}/technologies`);
  }

  getTechnology(id: string) {
    return this.http.get(`${this.API}/technology/${id}`);
  }
}
