import {Component, inject} from '@angular/core';
import {CharactersService} from "../../services/characters.service";
import {Character} from "../../common/InterfaceRM";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-char-detail',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './char-detail.component.html',
  styleUrl: './char-detail.component.css'
})
export class CharDetailComponent {
  private charService = inject(CharactersService);
  private ar = inject(ActivatedRoute);
  private router= inject(Router);
  char!: Character;
  id: number = 0;

  constructor() {
    this.loadChar();
  }

  private loadChar() {
    this.ar.params.subscribe(
      {
        next: value => {
          this.id = value['id'];
          this.charService.getCharacter(this.id).subscribe(
            {
              next: res => {
                this.char = res;
              },
              error: err => {
                console.error(err);
              },
              complete: () => {
                console.log('Char loaded');
              }
            }
          )
        },
        error: err => {
          console.error(err);
        }
      }
    )
  }

  loadPage(page: number) {
    if ((+this.id+page)<1 ||(+this.id+page)>826 )return;
    this.id = +this.id+page;
    this.router.navigateByUrl('/characters/detail/'+this.id);
  }
}
