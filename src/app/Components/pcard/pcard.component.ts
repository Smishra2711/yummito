import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pcard",
  templateUrl: "./pcard.component.html",
  styleUrls: ["./pcard.component.css"]
})
export class PcardComponent implements OnInit {
  @Input()
  name: string;
  subStoreType: string;
  rateForTwo: string;
  cookingTime: string;
  distance: string;
  img: string;
  logo: string;
  constructor() {}

  ngOnInit(): void {}
}
