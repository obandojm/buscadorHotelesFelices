import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a-kilometros',
  templateUrl: './a-kilometros.page.html',
  styleUrls: ['./a-kilometros.page.scss'],
})
export class AKilometrosPage implements OnInit {

  private conversion:number;
  private numeroPasar:number;
  constructor(private activatedRouter:ActivatedRoute) {
    this.numeroPasar = parseInt(this.activatedRouter.snapshot.paramMap.get('numero').trim());
    this.conversion=this.numeroPasar*(1.60934);
   }
  
  ngOnInit() {
  }

}
