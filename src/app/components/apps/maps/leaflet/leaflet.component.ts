import { Component, ElementRef, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { add } from 'date-fns';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit {

  constructor(
    private http: HttpClient, private elementRef: ElementRef
  ) {}

  map!: L.Map;
  json:any;
  //Basic Map
  options1 = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      })
    ],
    zoom: 5,
    center: L.latLng(20.5937, 78.9629)
  };
  //Popup map
  options2 = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      }),
      L.circleMarker([20.5937, 78.9629]).bindPopup("<b>Hello world!<\/b><br />I am a popup.").openPopup()
    ],
    zoom: 5,
    center: L.latLng(20.5937, 78.9629)
  };
  //Circle map
  options3 = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      }),
      L.circle([20.5937, 78.9629], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
      })
    ],
    zoom: 5,
    center: L.latLng(20.5937, 78.9629)
  };

  onMapReady(map: L.Map) {
    this.http.get("assets/maps/leafletmap.json").subscribe((json: any) => {
      console.log(json);
      this.json = json;
      L.geoJSON(this.json).addTo(map);
    });
  }
  // markerIcon = {
  //   icon: L.icon({
  //     iconSize: [25, 41],
  //     iconAnchor: [10, 41],
  //     popupAnchor: [2, -40],
  //     // specify the path here
  //     iconUrl: "assets/img/marker-icon.png",
  //     shadowUrl: "assets/img/marker-shadow.png"
  //   })
  // };


  ngOnInit(): void {
    let leafLet1 = document.querySelector('#leaflet1')
    let leafLet2 = document.querySelector('#leaflet3')
    let leafLet3 = document.querySelector('#leaflet2')

    
    this.leafletFun(leafLet1)
    this.leafletFun(leafLet2)
    this.leafletFun(leafLet3)

    console.log(this.elementRef.nativeElement)
  }

  leafletFun(e:any){
    e.addEventListener('scroll',()=>{}, {passive:false})
    e.addEventListener('mousedown',()=>{}, {passive:false})
    e.addEventListener('mousemove',()=>{}, {passive:false})
    e.addEventListener('mouseout',()=>{}, {passive:false})
    e.addEventListener('mouseover',()=>{}, {passive:false})
    e.addEventListener('mouseup',()=>{}, {passive:false})
    e.addEventListener('click',()=>{}, {passive:false})
    e.addEventListener('wheel',()=>{}, {passive:false})
    e.addEventListener('drag',()=>{}, {passive:false})
    e.addEventListener('mouseenter',()=>{}, {passive:false})
  }

  ngAfterViewInit(){
  }

  ngOndestroy() {
    this.elementRef.nativeElement.remove();
  }
}
