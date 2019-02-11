import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public appComp: AppComponent;

  constructor() { }

  ngOnInit() {
  }

  public showHome(): void {
    this.appComp.showHome = true;
    this.appComp.showExperience = false;
    this.appComp.showContact = false;
    this.appComp.showAbout = false;
  }

  public showExperience(): void {
    this.appComp.showHome = true;
    this.appComp.showExperience = false;
    this.appComp.showContact = false;
    this.appComp.showAbout = false;
  }

  public showAbout(): void {
    this.appComp.showHome = true;
    this.appComp.showExperience = false;
    this.appComp.showContact = false;
    this.appComp.showAbout = false;
  }

  public showContact(): void {
    this.appComp.showHome = true;
    this.appComp.showExperience = false;
    this.appComp.showContact = false;
    this.appComp.showAbout = false;
  }

}
