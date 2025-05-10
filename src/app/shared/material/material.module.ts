import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import the Material components you need:
import { MatToolbarModule }    from '@angular/material/toolbar';
import { MatSidenavModule }    from '@angular/material/sidenav';
import { MatIconModule }       from '@angular/material/icon';
import { MatButtonModule }     from '@angular/material/button';
import { MatListModule }       from '@angular/material/list';
import { MatTableModule }      from '@angular/material/table';
import { MatInputModule }      from '@angular/material/input';
import { MatSelectModule }     from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule }       from '@angular/material/tabs';
import { MatExpansionModule }  from '@angular/material/expansion';
import { MatDialogModule }     from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
  ]
})
export class MaterialModule { }
