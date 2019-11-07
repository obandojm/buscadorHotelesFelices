import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.page.html',
  styleUrls: ['./uno.page.scss'],
})
export class UnoPage implements OnInit {

  private mio:string;
  constructor(private activatedRouter:ActivatedRoute) {
    this.mio=this.activatedRouter.snapshot.paramMap.get('numero');
   }
  
  ngOnInit() {
  }

}
