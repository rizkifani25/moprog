import { Component } from "@angular/core";
import { namePerson } from "../name";

@Component({
  selector: "app-fani05",
  templateUrl: "fani05.page.input.html",
  styleUrls: ["fani05.page.input.scss"]
})
export class Fani05PageInput {
  namePerson = namePerson;
  addName(input: string) {
    if (input) {
      this.namePerson.push(input);
      console.log(input);
    }
  }
}
