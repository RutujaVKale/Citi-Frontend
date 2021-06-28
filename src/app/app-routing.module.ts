import { TopstocksComponent } from './components/topstocks/topstocks.component';


import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: "login", component: LoginComponent, pathMatch: 'full'
  },
  {
    path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: "topstocks", component: TopstocksComponent, canActivate: [AuthGuard]
  },
  {
    path: "niftystocks", component: DashboardComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
