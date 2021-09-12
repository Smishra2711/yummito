import { Component, OnInit } from "@angular/core";
import { MasterService } from "../../Service/master.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  cat = [];
  stores = [];
  lat = "9.8716317";
  lon = "76.4926357";
  constructor(private service: MasterService) {}

  ngOnInit(): void {}

  showStore() {}

  getAllStore(type) {
    let apiPath = `vendor/store-list?lat=9.8716317&lon=76.4926357&store_type=${type}`;
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
