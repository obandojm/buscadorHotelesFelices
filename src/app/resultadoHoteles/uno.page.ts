import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../core/model/persona';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.page.html',
  styleUrls: ['./uno.page.scss'],
})
export class UnoPage implements OnInit {
  data: Persona;
  dataDos: Persona;
  constructor(private route: ActivatedRoute, public router: Router) {
    // Esta es la forma mas sencilla pero no recomendada
    this.data = this.router.getCurrentNavigation().extras.state.persona;
    this.dataDos = this.router.getCurrentNavigation().extras.state.personaDos;
  }

  ngOnInit() {
  }

}