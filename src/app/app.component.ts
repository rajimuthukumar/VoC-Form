import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  interests = ['1','2','3','4','5'];
  userModel = new User('','',1,18,'','',1111,'',
      '','','','','','','','','','');
} 
