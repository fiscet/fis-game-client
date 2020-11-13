import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseTemplateComponent } from "../app/template/base-template.component"
import { AuthGuardService } from "../app/services/auth-guard.service"

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: BaseTemplateComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'dashboard',
        loadChildren:  () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
