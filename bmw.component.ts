import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-bmw",
  template: `<p>{{ location.lat }}</p>
    <app-audi></app-audi>`,
})
export class BMWComponent {
  location: {
    lat: number;
    lon: number;
  };
  constructor() {
    this.location = {
      lat: 12,
      lon: 23,
    };
    this.test();
  }

  test() {
    var g = "dsf";
    alert("hi");
  }
}
export const r = "r";
