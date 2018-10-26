import { Component, OnInit } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  map,
  filter,
  switchMap
} from "rxjs/internal/operators";

const searchUrl = `https://api.github.com/search/repositories?q=`;

function search(source$: Observable<Event>, url: string): any {
  return source$.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    map((event: Event) => (event.target as HTMLInputElement).value),
    filter((value: string) => value.length > 2 && value !== ""),
    switchMap((query: string) => fetch(url + query).then(res => res.json()))
  );
}


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  public searchTextSequence$;
  public data;

  constructor() {}

  ngOnInit() {
    this.searchTextSequence$ = fromEvent(
      document.getElementById("searchInput") as HTMLInputElement,
      "keydown"
    );

    search(this.searchTextSequence$, searchUrl).subscribe((res: any) => {
      this.data = res.items;
      console.log(this.data);
      // divContent.innerHTML = "";
      // data.forEach((repo: r) => {
      // const p = document.createElement("p");
      // p.textContent = `${repo.html_url}`;
      // divContent.appendChild(p);
      // else {        divContent.innerHTML = "";      }
    });
  }
  // public getSearchResult
}
