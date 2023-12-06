import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './leaflet/leaflet.component';
import { MapsRoutingModule } from './maps-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [LeafletComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    HttpClientModule,
    LeafletModule,
    SharedModule
  ]
})
export class MapsModule { }
