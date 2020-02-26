import { Component } from "@angular/core";
import { namePerson } from "./name";

@Component({
  selector: "app-fani03",
  templateUrl: "fani03.page.html",
  styleUrls: ["fani03.page.scss"]
})
export class Fani03Page {
  namePerson = namePerson;
  addName(input: string) {
    if (input) {
      this.namePerson.push(input);
      console.log(input);
    }
  }
}
