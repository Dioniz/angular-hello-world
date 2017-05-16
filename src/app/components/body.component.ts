
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html',
})
export class BodyComponent {

  private mostrar:boolean = true;
  private texto:string = "Un gran poder requiere una gran responsabilidad.";
  private autor:string = "Ben Parker";

  private personajes:string[] = ["Spiderman", "Venom", "Dr. Octopus"];

}
