import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResultRM, Character} from "../common/InterfaceRM";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private URL = 'https://rickandmortyapi.com/api/character/';
  private http = inject(HttpClient);

  getCharacters(): Observable<ApiResultRM>{
    return this.http.get<ApiResultRM>(this.URL);
  }
  getCharactersPaged(page: number): Observable<ApiResultRM>{
    return this.http.get<ApiResultRM>(this.URL+'?page='+page);
  }
  getCharacter(id: number): Observable<Character>{
    return this.http.get<Character>(this.URL+id);
  }
}
