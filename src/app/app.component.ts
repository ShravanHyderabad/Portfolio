import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';


  public showHome: boolean;
  public showExperience: boolean;
  public showAbout: boolean;
  public showContact: boolean;

}
