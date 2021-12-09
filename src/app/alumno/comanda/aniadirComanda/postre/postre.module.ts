import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostrePageRoutingModule } from './postre-routing.module';

import { PostrePage } from './postre.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostrePageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [PostrePage]
})
export class PostrePageModule {}
