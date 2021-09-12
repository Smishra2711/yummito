import { Component, OnInit } from "@angular/core";
import { MasterService } from "src/app/Service/master.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-resturant",
  templateUrl: "./resturant.component.html",
  styleUrls: ["./resturant.component.css"]
})
export class ResturantComponent implements OnInit {
  constructor(private service: MasterService, private route: ActivatedRoute) {}

  type = "";
  stores = [];
  loadData: any;
  UID: string;

  private _loading: boolean = false;
  get loading(): boolean {
    return this._loading;
  }

  ngOnInit(): void {
    this.type = this.route.snapshot.params["type"];
    this.getAllStore(this.type);
  }

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
