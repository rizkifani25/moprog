import { Component } from '@angular/core';
import { namePerson } from './name';

@Component({
  selector: 'app-fani02',
  templateUrl: 'fani02.page.html',
  styleUrls: ['fani02.page.scss'],
})

export class Fani02Page {
  namePerson = namePerson;
  
  share() {
    window.alert('Name has been shared');
  }
}
