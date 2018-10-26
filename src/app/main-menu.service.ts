import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// import { HttpClientModule } from '@angular/common/http';

export interface IMenuItem {
  img: string;
  address: string;
  phone: number;
  weather: {
    title: string;
    icon: string;
    water: number;
    temperature: number;
  };
  social_info: {
    title: string;
    img: string;
    followers: number;
    following: number;
  };
  type: string;
}

@Injectable({
  providedIn: "root"
})
export class MainMenuService {
  constructor(private http: HttpClient) {}

  getMenuItems(name: string) {
    // let params = new HttpParams();
    // params = params.append('account', account);
    return this.http.get<Observable<IMenuItem[]>>(
      "http://localhost:8080/weather" // , {params: params}
    );
  }
}
