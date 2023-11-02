import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  constructor(private dbzService: DbzService){}

  get characters(): Character[] {
    return [...this.dbzService.character];
  }

  // para cuando el servicio es privado
  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCaracterById(id)
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
