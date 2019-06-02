import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService  } from "../../app-peia/services/services.service";
import { GlobalValue } from "../../app-peia/global/globalValue";
declare var $: any;
declare var swal: any;

@Component({
    moduleId:module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html',
    providers: [ServicesService]
})
/**
 *  Componenten implementado para
 *  manejar el inicio de sesion a la
 *  apliacion
 * 
 * @author Marcos Manotas
 * @sicne fecha de Creacion 1/Junio/2019
 */
export class LoginComponent implements OnInit{
    test : Date = new Date();

    public listTipeUser:any[]=[];
    private idRol:any;
    private user:any;
    private pass:any;

    constructor(public ws: ServicesService, private router: Router, private globalValue:GlobalValue) {
    }

    /**
     * Metodo utilizado por 
     * la plantilla para aplicar estilo
     */
    checkFullPageBackgroundImage(){
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if(image_src !== undefined){
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    /**
     * metdoo implemetnado para inicializar
     * atributos a utilizar en la aplicacion
     * 
     * @author Marcos Manotas
     * @ince Fecha de Creacion 1/Junio/29019
     */
    ngOnInit(){
        this.initAtri();
        this.checkFullPageBackgroundImage();

        setTimeout(function(){
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    }

    /**
     * Metodo implementado para verificar usuario
     * logueado
     * 
     * @author Marcos Manotas
     * * @ince Fecha de Creacion 1/Junio/29019
     */
    login(): void {

        try {
            this.ws.userLogin(this.idRol,this.user,this.pass).then(data => {
                if (!data['success']) {
                    swal({
                        type: "error",
                        title: data['msg']
                    }).catch(swal.noop);
                    return;
                }

                // localStorage.setItem('listPrefColumn',data['object'].prefColumn);
                this.globalValue.userLogin=data['object'];
                console.log(this.globalValue.userLogin);
                /**
                 * Se procede a pasar
                 * a la pagina principal.
                 */
                this.router.navigate(['dashboard']);        
            });   
        } catch (error) {
            
        }
    }

    /**
     * Mteodo implementado para iniciaiza
     * los atributos a utilizar en el
     * inicio de sesion
     * 
     * @author Marcos Manotas
     * * @ince Fecha de Creacion 1/Junio/29019
     */
    initAtri(){
        this.idRol=0;
        this.user=null;
        this.pass=null;
        this.listTipeUser=[
            {id:1, name:"Administrador PEIA"},
            {id:2, name:"Administrador"},
            {id:3, name:"Estudiante"}];
    }

}
