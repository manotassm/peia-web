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

























//   getProytectos(data: any[]) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();


//     data.forEach(e => {
//       if (e.filter) {
//         body.set(e.filter, e.value);
//       }
//     });

//     body.set("start", data[0].value);
//     body.set("limit", data[1].value);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_PROYECTOS, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   saveProytectos(data) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();
//     debugger
//     body.set("nombreProyecto", data.nombreProyecto);
//     body.set("generalContractor", data.generalContractor);
//     body.set("idResponsable", data.idResponsable);
//     body.set("idVendedorFk", data.idVendedorFk);
//     body.set("accountManager", data.accountManager);
//     body.set("idMercadoFk", data.idMercadoFk);
//     body.set("idRemitenteFk", data.idRemitenteFk);
//     body.set("idClienteFk", data.idClienteFk);
//     body.set("idCiudadFk", data.idCiudadFk);
//     body.set("idGrupoFk", data.idGrupoFk);
//     body.set("idProyecto", data.idProyecto);
//     body.set("observacion", data.observacion);
//     body.set("nombreVendedor", data.nameVendedor);
//     body.set("nombreAccManager", data.nameAccount);
//     body.set("nombreCliente", data.nameCliente);
//     body.set("nombreRemitente", data.nameRemitente);
//     body.set("idPrefijo", data.idPrefijo);
//     body.set("compFacturacion", data.compFacturacion);
//     body.set("remitente_nal", data.remitente_nal);
//     body.set("id_vendedor_nal", data.id_vendedor_nal);
//     body.set("idProyectoOpcion", data.idProyectoOpcion);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.SAVE_PROYECTOS, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   saveCotizacion(data) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("observacion", data.observacion);
//     body.set("fechaLlegada", !data.fechaLlegada ? null : moment(data.fechaLlegada).format('YYYY-MM-DD'));
//     body.set("primerEnvio", !data.primerEnvio ? null : moment(data.primerEnvio).format('YYYY-MM-DD'));
//     body.set("fechaLlegadaInfo", !data.fechaLlegadaInfo ? null : moment(data.fechaLlegadaInfo).format('YYYY-MM-DD'));
//     body.set("fechaSalidaPro", !data.fechaSalidaPro ? null : moment(data.fechaSalidaPro).format('YYYY-MM-DD'));
//     body.set("fechaEntrega", !data.fechaEntrega ? null : moment(data.fechaEntrega).format('YYYY-MM-DD'));
//     body.set("valorUsd", data.valorUsd);
//     body.set("valorCop", data.valorCop);
//     body.set("razonHold", data.razonHold);
//     body.set("idCuadroCotizacion", data.idCuadroCotizacion);
//     body.set("codigoCotizacion", data.codigoCotizacion);
//     body.set("fechaAdjudicado", !data.fechaAdjudicado ? null : moment(data.fechaAdjudicado).format('YYYY-MM-DD'));
//     body.set("fechaUltimaActualizacion", !data.fechaUltimaActualizacion ? null : moment(data.fechaUltimaActualizacion).format('YYYY-MM-DD'));
//     body.set("dueDate", !data.dueDate ? null : moment(data.dueDate).format('YYYY-MM-DD'));
//     body.set("fechaProgramada", !data.fechaProgramada ? null : moment(data.fechaProgramada).format('YYYY-MM-DD'));
//     body.set("idResponsable", data.idResponsable);
//     body.set("idRemitenteFk", data.idRemitenteFk);
//     body.set("idLongFk", data.idLongFk);
//     body.set("idTipoCotizacionFk", data.idTipoCotizacionFk);
//     body.set("idGrupoFk", data.idGrupoFk);
//     body.set("idEstadoFk", data.idEstadoFk);
//     body.set("idClienteFk", data.idClienteFk);
//     body.set("idPrefijo", data.idPrefijo);
//     body.set("nombreCotizacion", data.nombreCotizacion);
//     body.set("tipo_nodo", data.tipo_nodo);
//     body.set("id_padre", data.id_padre);
//     body.set("activo", data.activo);
//     body.set("compFacturacion", data.compFacturacion);
//     body.set("comision", data.comision);
//     body.set("utilidad", data.utilidad);
//     body.set("descuentos", data.descuentos);
//     body.set("utilidadReal", data.utilidadReal);
//     body.set("aptoModelo", data.aptoModelo);
//     body.set("preconstruccion", data.preconstruccion);
//     body.set("idTipoTransporte", data.idTipoTransporte);
//     body.set("idBluemax", data.idBluemax);
//     body.set("fechaLlegadaObra", data.fechaLlegadaObra);
//     body.set("co", data.co);
//     body.set("oferta", data.oferta);
//     body.set("pedido", data.pedido);
//     body.set("idPm", data.idPm);
//     body.set("pm", data.pm);
//     body.set("numAdicional", data.numAdicional);
//     body.set("recotizacion", data.recotizacion);
//     body.set("motivoPerd", data.motivoPerd);
//     body.set("estadoProyeccion", data.estadoProyeccion);
//     body.set("vendidoBodega", data.vendidoBodega);
//     body.set("fechaProgramadaReal",data.fechaProgramadaReal);
//     body.set("fechaEntregaIngeniera",data.fechaEntregaIngenieria);
//     body.set("fechaEstimadaFirma",data.fechaEstimadaFirma)
//     body.set("applyAdicional",data.applyAdicional);
//     body.set("adicional",data.adicional);
//     body.set("idRemitenteEsw",data.idRemitenteEsw);
//     body.set("applyRecotizacion",data.applyRecotizacion);
//     body.set("tempAditional",data.tempAditional);
//     body.set("tempRecotization",data.tempRecotization);
//     body.set("symbol",data.symbolRecotizacion);
//     body.set("numRecotization",data.numRecotization);
//     body.set("fechaLlegadaCompania",data.fechaLlegadaCompania);
//     body.set("licitacion",data.licitacion);
//     body.set("applyInstalacion",data.applyInstalacion);
//     body.set("applyContrato",data.applyContrato);
//     body.set("applyAnticipo",data.applyAnticipo);

//     if (data.proyectoNuevo) {
//       body.set("idProyectoFk", null);
//       body.set("nombreProyecto", data.nombreProyecto);
//       body.set("nombreCliente", data.nombreCliente);
//       body.set("nombreRemitente", data.nombreRemitente);
//       body.set("nombreVendedor", data.nombreVendedor);
//       body.set("nombreAccManager", data.nombreAccManager);
//       body.set("idVendedorFk", data.idVendedorFk);
//       body.set("idMercadoFk", data.idMercadoFk);
//       body.set("accountManager", data.accountManager);
//       body.set("idMercadoFk", "1");
//     } else {
//       body.set("idProyectoFk", data.idProyectoFk);
//     }


//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.SAVE_COTIZACIONES, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getCotizaciones(data) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();


//     /*
//     body.set("nombreCotizacion", data.nombreCotizacion);
//     body.set("valorUsd", data.valorUsd);
//     body.set("valorCop", data.valorCop);
//     body.set("razonHold", data.razonHold);
//     body.set("codigoCotizacion", data.codigoCotizacion);
//     body.set("idClienteFk", data.idClienteFk);
//     body.set("idProyectoFk", data.idProyecto);
//     body.set("activo", data.activo);
//     body.set("start", data.start);
//     body.set("limit", data.limit);*/

//     data.forEach(e => {
//       if (e.filter) {
//         body.set(e.filter, e.value);
//       }
//     });

//     body.set("start", data[0].value);
//     body.set("limit", data[1].value);
//     body.set("activo", data[2].value);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_COTIZACIONES, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getPersonas(query: string, mercado) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);
//     body.set("idMercadoFk", mercado);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_PERSONAS, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getPersonasAll(query: string) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);


//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_PERSONAS_ALL, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getMercados(query: string) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_MERCADOS, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getMercadosUsuario(query: string) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_MERCADOS_USUARIO, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getCompanias() {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();
//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_COMPANIAS, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }


//   getClientes(query: string, id) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);
//     body.set("id", id);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_CLIENTES, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getPms(query: string, id) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);
//     body.set("id", id);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_PMS, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getUnidades(tipo) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("tipo", tipo);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_UNIDADES, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getCiudades(query: string, id_pais, id_estado, id_condado) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);
//     body.set("id_pais", id_pais);
//     body.set("id_estado", id_estado);
//     body.set("id_condado", id_condado);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_CIUDADES, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getPaises(query: string) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_PAISES, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => {
//               debugger
//               this.solveErr(err);
//             }
//           )
//       });
//   }

//   getGrupos(query: string, idMercadoFk) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();
//     body.set("query", query);
//     body.set("idMercadoFk", idMercadoFk);
//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_GRUPOS, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getPrefijos(data) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", data.query);
//     body.set("tipo", data.tipo);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_PREFIJOS, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getEstados(query, id_padre) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);
//     body.set("id_padre", id_padre);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_ESTADOS, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });

//   }

//   getRemitentesNal(query) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_REMITENTES_NAL, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });

//   }

//   /**
//    * Metodo implementado para buscar
//    * los remitentes por tipo de mercado
//    * 
//    * @author Marcos Manotas
//    * @since Fecha de Creación: 29/Ene/2019
//    * 
//    * @param query 
//    */
//   getRemitentesByType(typeMercado) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("typeMercado", typeMercado);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_REMITENTE_BY_TYPE, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });

//   }


//   getVendedoresNal(query) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_VENDEDORES_NAL, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });

//   }

//   getClientesCrud(query) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_CLIENTES, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });

//   }

//   /**
//    * Metodo implementado para remover
//    * un remitente seleccionado
//    * 
//    * @author Marcos Manotas
//    * @since Fecha de Creación: 29/Ene/2019
//    * 
//    * @param id 
//    */
//   deleteRemitente(id) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("id", id);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.REMOVE_REMITENTE, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });

//   }

//   deleteCliente(id) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("id", id);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.ELIMINAR_CLIENTE, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });

//   }



//   cotizacionHistory(id_cuadro) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("id_cuadro", id_cuadro);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.COTIZACION_HISTORIAL, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   savePerfil(id_perfil, data) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("id_perfil", id_perfil);
//     body.set("acciones", JSON.stringify(data));

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.SAVE_PERFIL, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   saveCliente(data) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("id", data.id);
//     body.set("nombre", data.nombre);
//     body.set("telefono", data.telefono);
//     body.set("idVendedorFk", data.idVendedorFk);
//     body.set("idAccountManagerFk", data.idAccountManagerFk);
//     body.set("idPaisFk", data.idPaisFk);
//     body.set("id_estado", data.id_estado);
//     body.set("id_condado", data.id_condado);
//     body.set("idCiudad", data.idCiudad);
//     body.set("idCompaniaFacturacionFk", data.idCompaniaFacturacionFk);
//     body.set("idMercadoFk", data.idMercadoFk);
//     body.set("direccion", data.direccion);
//     body.set("zipCode", data.zipCode);
//     body.set("utility",data.utility);
//     body.set("discount",data.discount);
//     body.set("comision",data.comision);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.SAVE_CLIENTE, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getPerfil(data) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_PERFIL, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getAccionesPerfil(id_perfil) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();
//     body.set("id_perfil", id_perfil);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_PERMISOS_PERFIL, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   asociarPerfilUsuarios(data, cambios) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("agregar", cambios);
//     body.set("eliminar", data.eliminar);
//     body.set("id_usuario", data.id_usuario);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.SAVE_ASOCIAR_PERFIL_USUARIO, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   logout() {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.LOGOUT, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getUsuarioPerfiles(query) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_USUARIOS_PERFILES, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }


//   guardarPerfiles(data) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     debugger
//     body.set("id", data.id);
//     body.set("nombre", data.nombre);
//     body.set("addMercado", data.addMercado);
//     body.set("removeMercado", data.removeMercado);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.SAVE_PERFILES, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   listarSistemas(idCuadroCotizacion) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idCuadroCotizacion", idCuadroCotizacion);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_SISTEMA_COTIZACIONES, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   guardarSistema(data) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idSistema", data.idSistema);
//     body.set("cantidadSistema", data.cantidadSistema);
//     body.set("sistema", data.sistema);
//     body.set("kgAlum", data.kgAlum);
//     body.set("valorAlum", data.valorAlum);
//     body.set("idCotizacion", data.idCotizacion);
//     body.set("observacion", data.observacion);
//     body.set("paneles", data.paneles);
//     body.set("id", data.id);
//     body.set("idUnidad", data.idUnidad);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.SAVE_SISTEMA_COTIZACIONES, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }


//   eliminarSistema(sitemToRemove) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("id", sitemToRemove.id);
//     body.set("idCotizacion",sitemToRemove.idCotizacion);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.ELIMINAR_SISTEMA_COTIZACIONES, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   eliminarCristal(crysToRemove) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("id", crysToRemove.id);
//     body.set("idCotizacion",crysToRemove.idCotizacion)

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.ELIMINAR_VIDRIO_COTIZACIONES, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getSistema(query) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_SISTEMA, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getObtenerTratamientoVidrio(query) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_VIDRIOS_TRATAMIENTO, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getObtenerEspesoresVidrio(query) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_VIDRIOS_ESPESOR, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getObtenerSeparadores(idTipo) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idTipo", idTipo);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_VIDRIOS_SEPARADOR, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   guardarCristal(data, detalle) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();
//     debugger
//     body.set("id", data.id);
//     body.set("mt2", data.mt2);
//     body.set("sistema", data.sistema);
//     body.set("valor", data.valor);
//     body.set("config", data.config);
//     body.set("idCotizacion", data.idCotizacion);
//     body.set("observacion", data.observacion);
//     body.set("desperdicio", data.desperdicio);
//     body.set("idUnidad", data.idUnidad);
//     body.set("detalle", JSON.stringify(detalle));
//     body.set("idTipoCristal",data.idTipo);
//     body.set("tipo_borde",data.tipo_borde);
//     body.set("serigrafia",data.serigrafia);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.SAVE_CONFIGURACION_VIDRIOS, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   listarCristales(idCuadroCotizacion) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idCuadroCotizacion", idCuadroCotizacion);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_CONFIGURACION_VIDRIOS, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   listarDetCristales(idCristal) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idCristal", idCristal);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_CONFIGURACION_VIDRIOS_DET, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   exportarProyectos(data: any[], cabecera) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     data.forEach(e => {
//       if (e.filter) {
//         body.set(e.filter, e.value);
//       }
//     });
//     body.set("cabecera", cabecera);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_REPORTE_PROYECTOS, body.toString(), opt)
//           .map(res => res.blob())
//           .subscribe(
//             data => { this.downloadFile(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   downloadFile(data) {
//     debugger
//     var blob = new Blob([data], { type: 'text/csv' });
//     var url = window.URL.createObjectURL(blob);
//     window.open(url);
//   }

//   getTipoCristal(query: string) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_TIPO_CRISTAL, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   obtenerColorVidrio() {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_VIDRIOS_COLOR, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getAcabados(query) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_ACABADO_ALUMINIO, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getTiposCotizacion(query) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_TIPO_COTIZACION, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   listarAluminio(id) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idCuadroCotizacion", id);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.LISTAR_ALUMINIO_COTIZACION, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   guardarAluminio(data) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("id", data.id);
//     body.set("kg", data.kg);
//     body.set("valor", data.valor);
//     body.set("desperdicio", data.desperdicio);
//     body.set("idAcabado", data.idAcabado);
//     body.set("idCotizacion", data.idCotizacion);
//     body.set("observacion", data.observacion);
//     body.set("idUnidad", data.idUnidad);
//     body.set("lme", data.lme);
//     body.set("valorAcabado", data.valorAcabado);
//     body.set("prima", data.prima);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.SAVE_ALUMINIO_COTIZACION, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   eliminarAluminio(alumToRemove) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("id", alumToRemove.id);
//     body.set("idCotizacion", alumToRemove.idCotizacion)

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.ELIMINAR_ALUMINIO_COTIZACION, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   duplicarProyecto(data) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("nombreProyecto", data.nombreProyecto);
//     body.set("idProyecto", data.idProyecto);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.DUPLICAR_PROYECTO, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   deleteProyecto(data) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idProyecto", data.id_proyecto);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.INACTIVAR_PROYECTO, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   /**
//    * Metodo implementado para remover
//    * por completo del sistema una cotizacion
//    * seleccionada
//    * 
//    * @author Marcos Manotas
//    * @since Fecha de Creación: 29/Nov/2018
//    */
//   removeCotizacion(data){

//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idCuadroCotizacion", data.idCuadroCotizacion);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.REMOVER_COTIZACION, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   deleteCotizacion(data) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idCuadroCotizacion", data.idCuadroCotizacion);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.INACTIVAR_COTIZACION, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }


//   duplicarCotizacion(data) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("nombreCotizacion", data.nombreCotizacion);
//     body.set("idCuadroCotizacion", data.idCuadroCotizacion);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.DUPLICAR_COTIZACION, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }


//   getEstadosUbicacion(query, id_pais) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);
//     body.set("id_pais", id_pais);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_ESTADO_UBICACION, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getCondados(query, id_pais, id_estado) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);
//     body.set("id_pais", id_pais);
//     body.set("id_estado", id_estado);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_CONDADO, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }
//   getFechaLlegada(fechaLlegada, idTipo) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();


//     body.set("fechaLlegada", fechaLlegada);
//     body.set("idTipo", idTipo);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_FECHA_LLEGADA, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getTiposBluemax(query) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_TIPOS_BLUEMAX, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getTiposTransporte(query) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_TIPOS_TRANSPORTE, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getTiposBordeCristal() {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_TIPOS_BORDES_CRISTAL, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   cargarCotiEsw(idEsworks, idCotizacion) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idEsworks", idEsworks);
//     body.set("idCotizacion", idCotizacion);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.CARGA_COTIZACION_ESW, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   uploadEp(file: File, idCotizacion) {

//     return new Promise((resolve, reject) => {

//       let xhr: XMLHttpRequest = new XMLHttpRequest();
//       xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//           if (xhr.status === 200) {
//             resolve(JSON.parse(xhr.response));
//           } else {
//             reject(xhr.response);
//           }
//         }
//       };
//       xhr.open('POST', HTTP_SERVICE.UPLOAD_EP, true);

//       let formData = new FormData();
//       formData.append("file", file, "name.xlsx");
//       formData.append("idCotizacion", idCotizacion);
//       xhr.send(formData);
//     });
//   }

//   /**
//    * Metodo implementado para guardar
//    * las preferencia de columnas
//    */
//   guardarPrefeColumUser (listColumnToSave) {

//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     console.log(listColumnToSave);
//     body.set("prefColumnToSave", listColumnToSave);
//     //body.set("idAppColumn",idAppColumn);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.SAVE_PREFERENCE_COLUMN, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }
  
//   uploadCotizacion(file: File, idCotizacion) {

//     return new Promise((resolve, reject) => {

//       let xhr: XMLHttpRequest = new XMLHttpRequest();
//       xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//           if (xhr.status === 200) {
//             resolve(JSON.parse(xhr.response));
//           } else {
//             reject(xhr.response);
//           }
//         }
//       };
//       xhr.open('POST', HTTP_SERVICE.UPLOAD_COTIZACION, true);

//       let formData = new FormData();
//       formData.append("file", file, file.name);
//       formData.append("idCotizacion", idCotizacion);
//       xhr.send(formData);
//     });
//   }


//   saveRemitente(data) {

//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("id", data.id);
//     body.set("nombre", data.nombre);
//     body.set("idMercado", data.idMercado);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.SAVE_REMITENTE, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   getEstadosOportunidad(){
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_ESTADO_OPORTUNIDAD, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }
  
//   /**
//    * Metodo implementado para obtener
//    * todas las oportunidades registradas 
//    * en el sistema
//    * 
//    * @author Marcos Manotas
//    * @since Fecha de Creacion: 19/Marzo/2019
//    */
//   getOportunidades(query){
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("query", query);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_OPORTUNIDAD, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }
  
//   /**
//    * Metodo implementado para buscar el 
//    * listado de comentarios vinculados a 
//    * una oportunidad
//    * 
//    * @author Marcos Manotas
//    * @since Fecha de Creacion: 13/Marzo/2019
//    * 
//    * @param data 
//    */
//   getComentariosOportunidad(idOportunidad){
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idOportunidad", idOportunidad);
//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_COMENTARIOS_OPORTUNIDAD, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   /**
//    * Metodo implementado para 
//    * guardar o editar una oportunidad
//    * 
//    * @author Marcos Manotas
//    * @since: Fecha de Creacion 15/Marzo/2019
//    * @param oportunidad 
//    */
//   guardarOportunidad(oportunidad){

//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idOportunidad",oportunidad.id);
//     body.set("fechaObra", oportunidad.fechaObra);
//     body.set("comercial", oportunidad.comercial);
//     body.set("tipoContacto", oportunidad.tipoContacto);
//     body.set("areaProyecto", oportunidad.areaProyecto);
//     body.set("emailContacto", oportunidad.emailContacto);
//     body.set("nombreCliente", oportunidad.nombreCliente);
//     body.set("nombreProyecto", oportunidad.nombreProyecto);
//     body.set("nombreContacto", oportunidad.nombreContacto);
//     body.set("valorAproximado", oportunidad.valorAproximado);
//     body.set("telefonoContacto", oportunidad.telefonoContacto);
//     body.set("idEstadoOportunidad", oportunidad.idEstadoOportunidad);
//     body.set("idMercado", oportunidad.idMercado);
//     body.set("idUnidad", oportunidad.idUnidad);
 
//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.SAVE_OPORTUNIDAD, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
    
//   }
//   /**
//    * Metodo implementado para guardar
//    * una nueva observacion
//    * 
//    * @author Marcos Manotas
//    * @since Fecha de Creacion 18/Marzo/2019
//    * @param Observacion 
//    */
//   guardarObservacionOportu(observacion, idCadOportuni){

//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("titulo",observacion.titulo);
//     body.set("fechaComentario", observacion.fechaComentario);
//     body.set("comentario", observacion.comentario);
//     body.set("idCadOportuni",idCadOportuni);
 
//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.SAVE_OBSERVACION_OPORTUNIDAD, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   /**
//    * Metodo implementado para cargar 
//    * log de cambio 
//    * 
//    * @author Marcos Manotas
//    * @since Fecha de Creacion 18/Marzo/2019
//    */
//   getLogCambioOportunidad(idOportunidad){

//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idCadOportuni",idOportunidad);
 
//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_LOG_OPORTUNIDAD, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }
  
//   /**
//    * Metodo implementado para cargar
//    * listado de actividades por oportunidad
//    * 
//    * @author Marcos Manotas
//    * @since Fecha de Creacion: 30/Marzo/2019
//    * 
//    * @param idOportunidad 
//    */
//   getListActividadesOportunidad(idOportunidad){

//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idCadOportuni",idOportunidad);
 
//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GET_LISTADO_OPORTUNIDADES, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   /**
//    * Metodo implementado para eliminar
//    * una oportunidad seleccionada
//    * 
//    * @author Marcos Manotas
//    * @since Fecha de Creacion 19/Marzo/2019
//    * @param idOportunidad 
//    */
//   deleteOportunidad(idOportunidad) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idOportunidad", idOportunidad);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.INACTIVAR_OPORTUNIDAD, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   /**
//    * Metodo implementado para eliminar
//    * una observacion seleccionada
//    * 
//    * @author Marcos Manotas
//    * @since Fecha de Creacion 19/Marzo/2019
//    * @param idObservacion
//    */
//   deleteObservacion (idObservacion){

//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idObservacion", idObservacion);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.INACTIVAR_OBSERVACION, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   /**
//    * Metodo implementad para guardar 
//    * un archivo a la cotizacion seleccionada
//    * 
//    * @author Marcos Manotas
//    * @since Fecha de Creacion 20/Marzo/2019
//    * 
//    * @param file 
//    * @param idCadOportu 
//    */
//   saveFileOportunidad(file: File, idCadOportu) {

//     return new Promise((resolve, reject) => {

//       let xhr: XMLHttpRequest = new XMLHttpRequest();
//       xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//           if (xhr.status === 200) {
//             resolve(JSON.parse(xhr.response));
//           } else {
//             reject(xhr.response);
//           }
//         }
//       };
//       xhr.open('POST', HTTP_SERVICE.UPLOAD_FILE_OPORTUNIDAD, true);

//       let formData = new FormData();
//       formData.append("file", file, file.name);
//       formData.append("idCadOportu", idCadOportu);
//       xhr.send(formData);
//     });
//   }


//   /**
//    * Metodo implementado para guardar
//    * las actividades ingresadas
//    * 
//    * @author Marcos Manotas
//    * @since Fecha de Creacion 29/Marzo/2019
//    * @param idObservacion
//    */
//   guardarActividades (listActivi, idCadOportunidad){

//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded;" );
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     console.log(JSON.stringify(listActivi));
//     body.set('listActivi', JSON.stringify(listActivi));
//     body.set('idCadOportunidad', idCadOportunidad);
    
//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.GUARDAR_ACTIVIDADES_OPORTUNIDAD, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }

//   /**
//    * Metodo implementado para remover
//    * una actividad seleccionada
//    * 
//    * @author Marcos Manotas
//    * @since Fecha de Creacion 1/Abril/2019
//    */
//   removerActividades(idActivi){

//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded;" );
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set('idActivi', idActivi);
    
//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.REMOVER_ACTIVIDAD_OPORTUNIDAD, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });  
//   }

//   /**
//    * Metodo implementado para cargar
//    * opciones de proyecto.
//    * 
//    * @author Marcos Manotas
//    * @since Fecha de Creación: 23/Abril/2019
//    */
//   getProyectoOpciones() {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_PROYECTO_OPCIONES, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });
//   }


//   /**
//    * Metodo implementado para obtener listado
//    * de estados de proyeccion por medio de estado 
//    * de cotizacon y mercado
//    * 
//    * @author Marcos Manotas
//    * @since Fecha de Creacion 2/Mayo/2019
//    * 
//    * @param idMercado 
//    * @param idPadre 
//    */
//   getEstadosProyeccion(idMercado, idPadre) {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded");
//     let opt = new RequestOptions({ headers });
//     let body = new URLSearchParams();

//     body.set("idMercado", idMercado);
//     body.set("idPadre", idPadre);

//     return new Promise(
//       resolve => {
//         this.http.post(HTTP_SERVICE.PARAMS_GET_ESTADOS_PROYECCION, body.toString(), opt)
//           .map(res => res.json())
//           .subscribe(
//             data => { resolve(data); },
//             err => { this.solveErr(err); }
//           )
//       });

//   }
}
