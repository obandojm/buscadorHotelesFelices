import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AKilometrosPage } from './a-kilometros.page';

const routes: Routes = [
  {
    path: '',
    component: AKilometrosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AKilometrosPage]
})
export class AKilometrosPageModule {}
