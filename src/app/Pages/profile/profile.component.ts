import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MasterService } from "src/app/Service/master.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  isList: number | undefined;
  isMenu: boolean = false;
  isSearch: boolean = false;
  type = "";
  orders = [];
  loadData: any;
  UID: string;

  private _loading: boolean = false;
  get loading(): boolean {
    return this._loading;
  }

  constructor(private route: ActivatedRoute, private servide: MasterService) {}

  ngOnInit(): void {
    var self = this;
    this.type = this.route.snapshot.params["type"];
    if (this.type === "order-history") {
      this.getAllOrders();
    }
  }

  getAllOrders() {
    console.log("ee");
    this.servide.authGet("order/list").subscribe(
      (res) => {
        this.orders.push(res);
        console.log(this.orders);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
