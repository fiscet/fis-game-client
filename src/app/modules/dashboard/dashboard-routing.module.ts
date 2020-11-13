import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard.component"
import { AuthGuardService } from "../../services/auth-guard.service"

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Dashboard'
    },
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'Lista'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
