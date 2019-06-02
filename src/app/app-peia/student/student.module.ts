import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { StudentRoutes } from './student.routing'
import { StudentComponent } from './student.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StudentRoutes),
    FormsModule,

    NgxPaginationModule
  ],
  declarations: [
    StudentComponent
  ]
})

export class  StudentModule { }
