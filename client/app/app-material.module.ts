import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule,
  MatSliderModule,
  MatInputModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule,
    MatSliderModule,
    MatInputModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule,
    MatSliderModule,
    MatInputModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class AngularMaterialModule { }
