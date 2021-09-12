import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MasterService {
  constructor(private http: HttpClient) {}

  apiServer = "https://api.vettyonline.com/";

  post(apiPath: string, body: any) {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.apiServer + apiPath, body, { headers: headers });
  }

  get(apiPath: string) {
    const headers = { "content-type": "application/json" };
    return this.http.get(this.apiServer + apiPath, { headers: headers });
  }

  authPost(apiPath: string, body: any) {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.apiServer + apiPath, body, { headers: headers });
  }

  authGet(apiPath: string) {
    const headers = {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI3OWY3YTI1LWRiMmMtNGYzYi05OTdjLTMxYjU3YzdiMTE1ZSIsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjMxNDMyMzY0fQ.Uli6oNzplQsERvSJhn0INFUYnVg-xHA3f9o13cdpHnM"
    };
    return this.http.get(this.apiServer + apiPath, { headers: headers });
  }
}
