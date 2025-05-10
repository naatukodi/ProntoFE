import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../app/core/auth/auth.guard'; // if you have one
import { RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./valuations/valuations/valuations.module').then(m => m.ValuationsModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'dashboard' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }