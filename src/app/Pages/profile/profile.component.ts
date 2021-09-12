import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

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
  Data = [];
  loadData: any;
  UID: string;

  private _loading: boolean = false;
  get loading(): boolean {
    return this._loading;
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    var self = this;
    this.type = this.route.snapshot.params["type"];
  }
}
