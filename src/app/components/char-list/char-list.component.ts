import {Component, inject} from '@angular/core';
import {CharactersService} from "../../services/characters.service";
import {ApiResultRM} from "../../common/InterfaceRM";
import {DatePipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-char-list',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink,
    NgbPagination
  ],
  templateUrl: './char-list.component.html',
  styleUrl: './char-list.component.css'
})
export class CharListComponent {
  private charService: CharactersService =  inject(CharactersService);
  public apiData!: ApiResultRM;
  page = 1;

  constructor() {
    this.loadCharacters();
  }

  loadCharacters(page?:number) {
    console.log(this.page)
    if(page)this.page = page;
    this.charService.getCharactersPaged(this.page).subscribe(
      {
        next: (value: ApiResultRM) => {
          this.apiData = value;
          console.log(value)
          console.log(this.page)
        },error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Characters loaded');
        }
      }
    )
  }
}
