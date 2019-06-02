import { Injectable } from '@angular/core';
import { HTTP_SERVICE } from '../global/global';
import 'rxjs/add/operator/map';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';


@Injectable()
export class ServicesService {
  
  constructor(public http: Http, public router: Router) { }

  restart() {
   
  }

  /**
   * Metodo implemetnado para en caso de haber un fallo
   * en el inicio de sesion se salga y muestra la pagina principal
   * 
   * @author Marcos Manotas
   * 
   * @param err 
   */
  solveErr(err) {
    console.log(err);
    if (err.status == 401) {
      localStorage.removeItem("session");
      this.router.navigate(['']);
    } else {

    }
  }


  /**
   * Metodo implementado para proceder 
   * a realizar el inicio de sesion
   * 
   * @author Marcos Manotas
   */
  userLogin(idRol,nick,pass) {
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let opt = new RequestOptions({ headers });
    let body = new URLSearchParams();

    body.set("idRol", idRol);
    body.set("user", nick);
    body.set("pass",pass);

    return new Promise(
      resolve => {
        this.http.post(HTTP_SERVICE.GET_LOGIN_USER, body.toString(), opt)
          .map(res => res.json())
          .subscribe(
            data => { resolve(data); },
            err => { this.solveErr(err); }
          )
      });
  }

  /**
   * metodo implementado para cargar las
   * denominaciones de billetes registrados 
   * en el sistema
   * 
   * @authro Marcos Manbotas
   * @since Fecha de Creacion 1/Junio/20919
   */
  loadAllTickets(){
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let opt = new RequestOptions({ headers });
    let body = new URLSearchParams();

    body.set("query",'');

    return new Promise(
      resolve => {
        this.http.post(HTTP_SERVICE.GET_ALL_TICKETS, body.toString(), opt)
          .map(res => res.json())
          .subscribe(
            data => { resolve(data); },
            err => { this.solveErr(err); }
          )
      });
  }

  /**
   * metodo implementado para guardar 
   * el dinero ingresa por el administrador
   * 
   * @authro Marcos Manbotas
   * @since Fecha de Creacion 1/Junio/20919
   */
  saveMoney(idUser,
            idTicke,
            cant){
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let opt = new RequestOptions({ headers });
    let body = new URLSearchParams();

    
    body.set("idUser", idUser);
    body.set("idTicket",idTicke);
    body.set("cant", cant);
   

    return new Promise(
      resolve => {
        this.http.post(HTTP_SERVICE.GET_SAVE_MONEY, body.toString(), opt)
          .map(res => res.json())
          .subscribe(
            data => { resolve(data); },
            err => { this.solveErr(err); }
          )
      });
  }


  
  /**
   * metodo implementado para cargar los
   * registros de dinero
   * 
   * @authro Marcos Manotas
   * @since Fecha de Creacion 1/Junio/20919
   */
  findAllRegistre(){
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let opt = new RequestOptions({ headers });
    let body = new URLSearchParams();

    body.set("query",'');

    return new Promise(
      resolve => {
        this.http.post(HTTP_SERVICE.GET_ALL_REGISTRE, body.toString(), opt)
          .map(res => res.json())
          .subscribe(
            data => { resolve(data); },
            err => { this.solveErr(err); }
          )
      });
  }



  
  /**
   * metodo implementado para cargar los
   * bonos
   * 
   * @authro Marcos Manotas
   * @since Fecha de Creacion 1/Junio/20919
   */
  findAllRegistreBono(){
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let opt = new RequestOptions({ headers });
    let body = new URLSearchParams();

    body.set("query",'');

    return new Promise(
      resolve => {
        this.http.post(HTTP_SERVICE.GET_ALL_BONO, body.toString(), opt)
          .map(res => res.json())
          .subscribe(
            data => { resolve(data); },
            err => { this.solveErr(err); }
          )
      });
  }


  
  /**
   * metodo implementado para cargar los
   * estudiantes
   * 
   * @authro Marcos Manotas
   * @since Fecha de Creacion 1/Junio/20919
   */
  findAllStudent(){
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let opt = new RequestOptions({ headers });
    let body = new URLSearchParams();

    body.set("query",'');

    return new Promise(
      resolve => {
        this.http.post(HTTP_SERVICE.GET_ALL_STUDENT, body.toString(), opt)
          .map(res => res.json())
          .subscribe(
            data => { resolve(data); },
            err => { this.solveErr(err); }
          )
      });
  }


  
  /**
   * metodo implementado para cargar los
   * estudiantes
   * 
   * @authro Marcos Manotas
   * @since Fecha de Creacion 1/Junio/20919
   */
  saveBono(idUser,cantBono,idStudent){
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let opt = new RequestOptions({ headers });
    let body = new URLSearchParams();

    body.set("idStudent",idStudent);
    body.set("cantBono",cantBono);
    body.set("idUser",idUser);


    return new Promise(
      resolve => {
        this.http.post(HTTP_SERVICE.SAVE_BONO, body.toString(), opt)
          .map(res => res.json())
          .subscribe(
            data => { resolve(data); },
            err => { this.solveErr(err); }
          )
      });
  }




  
  /**
   * metodo implementado para cargar los
   * bonos registrados a un estudiantes
   * 
   * @authro Marcos Manotas
   * @since Fecha de Creacion 2/Junio/20919
   */
  getListBondsByIdStudent(idUser){
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let opt = new RequestOptions({ headers });
    let body = new URLSearchParams();

    body.set("idUser",idUser);


    return new Promise(
      resolve => {
        this.http.post(HTTP_SERVICE.GET_ALL_BONO_BY_STUDENT, body.toString(), opt)
          .map(res => res.json())
          .subscribe(
            data => { resolve(data); },
            err => { this.solveErr(err); }
          )
      });
  }

}
