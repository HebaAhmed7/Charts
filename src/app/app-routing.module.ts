import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { QuantitativeComponent } from './quantitative/quantitative.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutbreaksChartsComponent } from './outbreaks-charts/outbreaks-charts.component';

const routes: Routes = [
  {
    path: 'outbreaks',
    canActivate: [AuthGuard],
    component: OutbreaksChartsComponent,
  },
  {
    path: 'quantitative',
    canActivate: [AuthGuard],
    component: QuantitativeComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'outbreaks', pathMatch: 'full' },
  { path: '**', canActivate: [AuthGuard], component: QuantitativeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
