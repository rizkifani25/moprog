import { Component } from "@angular/core";
import { namePerson } from "./name";

@Component({
  selector: "app-fani04",
  templateUrl: "fani04.page.html",
  styleUrls: ["fani04.page.scss"]
})
export class Fani04Page {
  namePerson = namePerson;
  addName(input: string) {
    if (input) {
      this.namePerson.push(input);
      console.log(input);
    }
  }
}
