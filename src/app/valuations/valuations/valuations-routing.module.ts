import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormComponent } from '../form/form.component';
import { DetailComponent } from '../detail/detail.component';
import { AuthGuard } from '../../core/auth/auth.guard'; // if you have one

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new',
    component: FormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: DetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id/edit',
    component: FormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValuationsRoutingModule { }
