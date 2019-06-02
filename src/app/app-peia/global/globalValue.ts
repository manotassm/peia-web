import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

declare var $: any;
declare var jQuery: any;

/**
 * Servicio implementado para tener todos
 * los valores que se hayan de utiolizar en los distintos
 * componentes atravez de la aplicacion
 * @uthor marcos Manotas
 */
@Injectable()
export class GlobalValue {

    public userLogin:any;
}
