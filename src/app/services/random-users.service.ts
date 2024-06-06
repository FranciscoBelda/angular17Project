import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResultRandomUsers} from "../common/interfaces";

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  // URL de la API genérica que será la base de todos los endpoints a los que queramos 'atacar'
  private URL = 'https://randomuser.me/api/?results=20&seed=Progresa';
  // Inyectamos el cliente http y lo guardamos en una variable 'http' para usar las operaciones crud sobre la API
  private http = inject(HttpClient);

  // Función que devolverá un Observable con el tipo de datos que devuelve la API
  getUsers(): Observable<ApiResultRandomUsers>{
    // Devolvemos el resultado de realizar un GET sobre la URL de la API
    return this.http.get<ApiResultRandomUsers>(this.URL);
  }

}
