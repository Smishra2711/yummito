import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MasterService {
  constructor(private http: HttpClient) {}

  apiServer = "https://api.vettyonline.com/";

  send(apiPath: string, data: any) {
    return this.http.post(this.apiServer + apiPath, data);
  }
}
