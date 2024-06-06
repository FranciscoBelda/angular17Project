import {Component, inject} from '@angular/core';
import {RandomUsersService} from "../../services/random-users.service";
import {ApiResultRandomUsers} from "../../common/interfaces";
import {DatePipe, NgStyle} from "@angular/common";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-datos-api',
  standalone: true,
  imports: [
    DatePipe,
    NgbPagination,
    RouterLink,
    NgStyle
  ],
  templateUrl: './datos-api.component.html',
  styleUrl: './datos-api.component.css'
})
export class DatosApiComponent {
  // Inyectamos el servicio creado previamente para poder utilizarlo y acceder a sus funciones
  private service = inject(RandomUsersService);
  // Creamos una variable que recogerá la información de la API
  apiData!: ApiResultRandomUsers;
  fecha = new Date();

  // En el constructor llamamos a una función que cargará los datos desde la API
  constructor() {
    this.loadUsers();
  }

  // Función que carga la información de la API
  loaded: boolean = false;
  private loadUsers() {
    // Nos subscribimos al Observable que devuelve la información de la API para poder trabajar con su respuesta
    this.service.getUsers().subscribe(
      // El objeto observer puede tener 2 estados y un final.
      // El estado 'next' es cuando va bien y la API devuelve la información
      // El estado 'error' es cuando no ha podido conectar correctamente con la API
      // El final 'complete' indica que el Observable ha finalizado
      {
        next: data => {
          this.apiData = data;
          this.loaded = true;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Users loaded');
        }
      }
    )
  }

  protected readonly Array = Array;
  protected readonly Date = Date;
}
