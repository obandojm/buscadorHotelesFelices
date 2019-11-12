import { Persona } from './../core/model/persona';
import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  personaje = new Persona();
  personajazo = new Persona();
  ciudad = [this.personaje, this.personajazo];

  constructor(public router: Router) {
    this.personajazo.nombre = "Teodoro";
  }
  obtenerPersona() {
    let navigationExtras: NavigationExtras = {
      state: {
        persona: new Persona(),
        personaDos: this.personajazo,
        ciudad: this.ciudad
      }
    }
    // Utilizo el router
    this.router.navigate(['uno'], navigationExtras);
  }
}
