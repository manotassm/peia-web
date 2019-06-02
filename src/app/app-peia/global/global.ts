import { SafeMethodCall } from "@angular/compiler";

const SERVICIOURL = "http://localhost:8080/peia";
export const HTTP_SERVICE = {
    
    GET_LOGIN_USER: SERVICIOURL + "/webresources/securityServiceRest/login",

    GET_ALL_TICKETS: SERVICIOURL + "/webresources/adminService/findAllTickets",
    GET_SAVE_MONEY: SERVICIOURL +"/webresources/adminService/saveMoney",
    GET_ALL_REGISTRE: SERVICIOURL +"/webresources/adminService/findAllRegistre",

    GET_ALL_STUDENT: SERVICIOURL +"/webresources/adminService/findAllStudent",
    GET_ALL_BONO: SERVICIOURL +"/webresources/adminService/findAllBono",
    SAVE_BONO: SERVICIOURL +"/webresources/adminService/saveBono",

    GET_ALL_BONO_BY_STUDENT: SERVICIOURL +"/webresources/studentService/getListBondsByIdStudent"
}
