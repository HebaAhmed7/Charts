import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OutbreaksChartsComponent } from './outbreaks-charts/outbreaks-charts.component';
import { QuantitativeComponent } from './quantitative/quantitative.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterilModule } from './materil/materil.module';
import { HeaderComponent } from './header/header.component';
import { WorldComponent } from './header/world/world.component';
import { CountryComponent } from './header/country/country.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OutbreaksChartsComponent,
    QuantitativeComponent,
    MapComponent,
    HeaderComponent,
    WorldComponent,
    CountryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterilModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
