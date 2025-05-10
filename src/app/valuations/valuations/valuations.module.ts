import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { ValuationsRoutingModule } from './valuations-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormComponent } from '../form/form.component';
import { DetailComponent } from '../detail/detail.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    ValuationsRoutingModule
  ]
})
export class ValuationsModule { }
