import { Component, OnInit } from "@angular/core";
import { MainMenuService, IMenuItem } from "../main-menu.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.scss"]
})
export class MainMenuComponent implements OnInit {

  public menuItems$: Observable<IMenuItem[]>;

  constructor(private mainMenuService: MainMenuService) {}

  ngOnInit() {
    this.mainMenuService.getMenuItems('').subscribe(
              res => {
                  this.menuItems$ = res;
                  console.log(this.menuItems$ );
              },
              err => {
                  console.log(err);
              }
          );
  }

  // getWidgetComponent(componentName: string): Object {
//   return featureWidgetMap[componentName];
// }
}

// public widgets: FeatureWidgetItem[] = []
// constructor(private homePageWidgetService: HomePageWidgetService) {}

// ngOnInit() {
//     this.homePageWidgetService.getAccountWidgets('amazon').subscribe(
//         res => {
//             this.widgets = res;
//         },
//         err => {
//             console.log(err);
//         }
//     );
// }

// getWidgetComponent(componentName: string): Object {
//   return featureWidgetMap[componentName];
// }
