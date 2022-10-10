import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { SamComponent } from './sam/sam.component';
// import { PaginationComponent } from './pagination/pagination.component';
import { CanActiveGuard } from './shared/can-active.guard';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'login' ,component:LoginComponent},
  {path:'sam' ,component:SamComponent},
  {path:'dashboard' ,component:DashComponent,canActivate:[CanActiveGuard]},
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path:'view' ,component:ViewComponent,canActivate:[CanActiveGuard]},
  
  // ,canActivate:[CanActiveGuard],
  // {path:'page' ,component:PaginationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
