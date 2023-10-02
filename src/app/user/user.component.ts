import { Component } from '@angular/core';
import { person } from '../models/person';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  person: person = {
    userId: 1
  };

}