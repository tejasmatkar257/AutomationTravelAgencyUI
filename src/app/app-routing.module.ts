import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddVehicleComponent } from './pages/vehicle/add-vehicle/add-vehicle.component';
import { VehicleListComponent } from './pages/vehicle/vehicle-list/vehicle-list.component';
import { DriverComponent } from './pages/driver/driver.component';
import { RoutesComponent } from './pages/routes/routes.component';
import { BookingComponent } from './pages/booking/booking.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-vehicle', component: AddVehicleComponent },
  { path: 'admin/vehicle', component: VehicleListComponent },
  { path: 'admin/driver', component: DriverComponent },
  { path: 'admin/route', component: RoutesComponent },
  { path: 'admin/booking', component: BookingComponent }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
