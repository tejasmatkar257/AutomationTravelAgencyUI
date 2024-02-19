import { Component } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent {

  model: Vehicle;

  constructor(private vehicleService:VehicleService) {
    this.model = {
      vehicleName: '',
      vehicleNumber: '',
      driverId: 0,
      vehicleType: '',
      farePerKm: 0,
      seatingCapacity: 0
    };
  }

  onSubmit() {
    this.vehicleService.addVehicle(this.model).subscribe({
      next: (response) => {
        console.log('This was successful!')
      },
      error:(error)=> console.log('Error while adding the vehicle')
      
    });
  }

  // newVehicle: any = {}; // Object to store new vehicle data
  // vehicles: any[] = []; // Array to store added vehicles

  // onSubmit() {
  //   // Push the new vehicle data into the vehicles array
  //   this.vehicles.push({ ...this.newVehicle });
  //   // Clear the form fields
  //   this.newVehicle = {};
  //   console.log('Vehicle added',this.vehicles);
  // }

}
