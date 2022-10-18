import { Component, OnInit, ViewChild } from "@angular/core";
import { auditTime } from "rxjs/operators";
import { BMWComponent, r } from "./bmw.component";

@Component({
  selector: "app-audi",
  template: `<p>audi</p> `,
})
export class AudiComponent {
  constructor() {
    alert(r);
  }
}

//export default AudiComponent;
@Component({
  selector: "app-audi2",
  template: `<p>audi</p> `,
})
export class AbsComponent {
  m(parameters) {
    console.log("äbstra");
  }
}

interface AbsComponent1 {
  m(parameters);
  m2(): void;
}

class h implements AbsComponent1 {
  m2(): void {}
  m() {
    console.log("äbstra");
  }
}
