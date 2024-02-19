import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http:HttpClient) { }

  addVehicle(model: Vehicle): Observable<void>{
    return this.http.post<void>('https://localhost:7256/api/Vehicle', model);
  }
}
