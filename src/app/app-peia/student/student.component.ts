import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
declare var swal: any;
@Component({
  selector: 'StudentComponent',
  templateUrl: './student.component.html'
})

export class StudentComponent implements OnInit {

  /** Status Fields */
  public isLoading: boolean;

  /** Filters Fields */
  public plateFilter: string;
  public trackingFilter: string;
  public idQuotationStatusFilter: string;

  /** Main Fields */
  quotationList: any[];

  /** Paginator Fields */
  public limit: number;
  public total: number;
  public current: number;

  constructor(
    private router: Router) {

    /** Filters Fields */
    this.plateFilter = "";
    this.trackingFilter = "";
    this.idQuotationStatusFilter = "";  

    /** Main Fields */
    this.quotationList = [];

    /** Paginator Fields */
    this.limit = 10;
    this.total = 0;

  }

  ngOnInit() {
    
  }

  

}
