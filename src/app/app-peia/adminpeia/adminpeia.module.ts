import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { AdminpeiaRoutes } from './adminpeia.routing'
import { AdminpeiaComponent } from './adminpeia.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminpeiaRoutes),
    FormsModule,

    NgxPaginationModule
  ],
  declarations: [
    AdminpeiaComponent
  ]
})

export class  AdminpeiaModule { }