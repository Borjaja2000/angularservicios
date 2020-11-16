import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Persona} from './../models/persona';
@Injectable()
export class PersonaService{
    constructor(private _http: HttpClient) {}

    mostrarMensaje(){
        console.log("Servicio HTTP");
    }
}