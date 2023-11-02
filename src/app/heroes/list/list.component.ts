import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroName: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Shed', 'Thor']
  public deletedHero?: string;

  removeLastHero():void {
    this.deletedHero = this.heroName.pop();

  }
}
