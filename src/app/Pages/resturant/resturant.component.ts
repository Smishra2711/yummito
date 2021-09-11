import { Component, OnInit } from "@angular/core";
import { MasterService } from "src/app/Service/master.service";

@Component({
  selector: "app-resturant",
  templateUrl: "./resturant.component.html",
  styleUrls: ["./resturant.component.css"]
})
export class ResturantComponent implements OnInit {
  constructor(private service: MasterService) {}

  stores = [];
  ngOnInit(): void {
    this.getAllStore("Resturant");
  }

  getAllStore(type) {
    let apiPath =
      "vendor/store-list?lat=9.8716317&lon=76.4926357&store_type=Restaurant";
    this.service.get(apiPath).subscribe(
      (res) => {
        this.stores.push(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
