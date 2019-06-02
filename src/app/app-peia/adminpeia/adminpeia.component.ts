import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService  } from "../../app-peia/services/services.service";
import { GlobalValue } from "../../app-peia/global/globalValue";

declare var $: any;
declare var swal: any;
@Component({
  selector: 'AdminpeiaComponent',
  templateUrl: './adminpeia.component.html',
  providers: [ServicesService]
})

/**
 * Compoenetnet implementado para gestionar
 * el moulo aministrador peia
 * 
 * @author Marco Manotas
 */
export class AdminpeiaComponent implements OnInit {

  private liststudent:any[]=[];
  private listRegisterBono:any[]=[];
  private cantMoney:any=null;
  private idStudent:any=null;

  constructor(public ws: ServicesService, private router: Router, private globalValue:GlobalValue) {
  }

  ngOnInit() {
    this.loadListStudent();
    this.loadListBono();
  }

  
  /**
   * Metodo implementado para cargar
   * listado de bonos
   * 
   * @author Marcos Manotas
   * @ince Fecha de Creacion 1/Junio/2019
   */
  loadListBono(){

    this.listRegisterBono=[];
    this.ws.findAllRegistreBono().then(data => {
      if (!data['success']) {
          swal({
              type: "error",
              title: data['msg']
          }).catch(swal.noop);
          return;
      }
      console.log(data);
      this.listRegisterBono=data['data'];
            
    });  
  }


  /**
   * Metodo implementado para cargar
   * listado de estudiantes
   * 
   * @author Marcos Manotas
   * @ince Fecha de Creacion 1/Junio/2019
   */
  loadListStudent(){

    this.liststudent=[];
    this.ws.findAllStudent().then(data => {
      if (!data['success']) {
          swal({
              type: "error",
              title: data['msg']
          }).catch(swal.noop);
          return;
      }
      console.log(data);
      this.liststudent=data['data'];
            
    });  
  }

  /**
   * Metodo implemnteado para guardar
   * un bono
   * 
   * @author Marcos Manotas
   * @since fecha de Creacion: 1/Junio/2019
   */
  saveBono(){

    this.ws.saveBono(this.globalValue.userLogin.id,
                    this.cantMoney,
                    this.idStudent).then(data => {
      if (!data['success']) {
          swal({
              type: "error",
              title: data['msg']
          }).catch(swal.noop);
          return;
      }

      swal({title: '',
              html: 'Bono regitro exitosamente.',
              type: "info"
        });
      this.listRegisterBono=data['data'];
      this.idStudent=null;
      this.cantMoney=null;
    });  
  }

  /**
   * Metodo implemetado para
   * cancelar un bono
   */
  cancelBono(){
    this.idStudent=null;
    this.cantMoney=null;
  }

}
