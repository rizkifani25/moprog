import { Component } from "@angular/core";
import { namePerson } from "./name";

@Component({
  selector: "app-fani05",
  templateUrl: "fani05.page.html",
  styleUrls: ["fani05.page.scss"]
})
export class Fani05Page {
  namePerson = namePerson;
  addName(input: string) {
    if (input) {
      this.namePerson.push(input);
      console.log(input);
    }
  }
  removeName(input: string) {
    let index = namePerson.indexOf(input);
    namePerson.splice(index, 1);
  }
}
