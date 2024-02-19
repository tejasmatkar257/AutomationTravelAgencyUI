import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VehicleListComponent } from './pages/vehicle/vehicle-list/vehicle-list.component';
import { AddVehicleComponent } from './pages/vehicle/add-vehicle/add-vehicle.component';
import { DriverComponent } from './pages/driver/driver.component';
import { RoutesComponent } from './pages/routes/routes.component';
import { BookingComponent } from './pages/booking/booking.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    VehicleListComponent,
    AddVehicleComponent,
    DriverComponent,
    RoutesComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
