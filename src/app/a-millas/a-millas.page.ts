import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a-millas',
  templateUrl: './a-millas.page.html',
  styleUrls: ['./a-millas.page.scss'],
})
export class AMillasPage implements OnInit {
  private conversion:number;
  private numeroPasar:number;
  constructor(private activateRouter:ActivatedRoute) {
    this.numeroPasar = parseInt(this.activateRouter.snapshot.paramMap.get('numero').trim());
    this.conversion=this.numeroPasar/(1.60934);
   }

  ngOnInit() {
  }

}
