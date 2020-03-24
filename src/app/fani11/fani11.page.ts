import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fani11",
  templateUrl: "fani11.page.html",
  styleUrls: ["fani11.page.scss"]
})
export class Fani11Page implements OnInit {
  title = "Discover";

  onChangePages = name => {
    this.title = name;
  };

  constructor() {}

  ngOnInit() {}
}
