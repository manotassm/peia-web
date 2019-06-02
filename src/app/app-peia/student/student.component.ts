import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService  } from "../../app-peia/services/services.service";
import { GlobalValue } from "../../app-peia/global/globalValue";

declare var $: any;
declare var swal: any;
@Component({
  selector: 'StudentComponent',
  templateUrl: './student.component.html',
  providers: [ServicesService]
})
/**
 * Componente que contendra la logica 
 * del modulo de estudiante
 * 
 * @author Marco Manotas
 */
export class StudentComponent implements OnInit {

  public listBonoStudent:any[]=[];

  constructor(public ws: ServicesService, private router: Router, private globalValue:GlobalValue) {

    }

    /**
     * Metodo utilizado para inicializar atributos a
     * utilizar durante el inicio del sistema
     * 
     * @authro marcos Manotas
     */
  ngOnInit() {
    this.loadListBonosRegistreByStudent();
  }

  /**
   * Metoo implementado para cargar el
   * listaddo ded bonos asignados a un 
   * estudiante
   * 
   * @author Marcos Manotas
   * @since Fecha de creacion 2/Junio /2019
   */
  loadListBonosRegistreByStudent(){

    this.listBonoStudent=[];
    this.ws.getListBondsByIdStudent(this.globalValue.userLogin.id).then(data => {
      if (!data['success']) {
          swal({
              type: "error",
              title: data['msg']
          }).catch(swal.noop);
          return;
      }
      this.listBonoStudent=data['data'];
            
    });  
    
  }

  

}
