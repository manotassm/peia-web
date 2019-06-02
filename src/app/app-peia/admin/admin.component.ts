import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService  } from "../../app-peia/services/services.service";
import { GlobalValue } from "../../app-peia/global/globalValue";

declare var $: any;
declare var swal: any;
@Component({
  selector: 'AdminComponent',
  templateUrl: './admin.component.html',
  providers: [ServicesService]
})

export class AdminComponent implements OnInit {

  private listDenominacion:any[]=[];
  private listRegisterMoney:any[]=[];

  private idTicket:any=null;
  private cantMoney:any=null;

  constructor(public ws: ServicesService, private router: Router, private globalValue:GlobalValue) {


  }

  ngAfterViewInit(){
    
    this.loadListRegisterMoney();
  }

  /**
   * Metodo implementado para
   * inicializar atributos a utilziar 
   * en la aplicacion
   */
  ngOnInit() {
    this.loadListDenomin();
  }

  /**
   * Metodod implementado para cargar todos
   * los registros realizados en el sistema
   * 
   * @author Marcos Manotas
   * @ince Fecha de Creacion 1/Junio/2019
   */
  loadListRegisterMoney(){
    this.listRegisterMoney=[];
    this.ws.findAllRegistre().then(data => {
      if (!data['success']) {
          swal({
              type: "error",
              title: data['msg']
          }).catch(swal.noop);
          return;
      }
      this.listRegisterMoney=data['data'];
            
    });   
  }

  /**
   *  Metodo implementado para cargar 
   * el listado de denominaciones
   * 
   * @author Marcos Manotas
   * @since Fecha de Creacion 1/Junio/2019
   */
  loadListDenomin(){
console.log("lista denominacion >>>>");
    this.listDenominacion=[];

    this.ws.loadAllTickets().then(data => {
      if (!data['success']) {
          swal({
              type: "error",
              title: data['msg']
          }).catch(swal.noop);
          return;
      }
      console.log(data);
      this.listDenominacion=data['data'];
            
    });   
  }

  /**
   * Metodo implementado para guardar
   * la cantidad de billetes ingresada
   * 
   * @author Marcos Manotas
   * 
   */
  saveRegistre(){
    console.log("Entro al guardado");

    this.ws.saveMoney(this.globalValue.userLogin.id,
                      this.idTicket,
                      this.cantMoney).then(data => {
      if (!data['success']) {
          swal({
              type: "error",
              title: data['msg']
          }).catch(swal.noop);
          return;
      }

      this.listRegisterMoney=[];
      this.listRegisterMoney=data['data'];
      console.log(data);
      console.log(this.listRegisterMoney);
      this.cantMoney=null;
      this.idTicket=null;
    });   
  }
  
/**
 * Metodo implmentado para cancelar
 * el registro de billetes
 * 
 * @author Marcos Manotas
 */
  cancelRegistre(){
    console.log("Registros cancelados");
    this.cantMoney=null;
    this.idTicket=null;
  }

  
}
