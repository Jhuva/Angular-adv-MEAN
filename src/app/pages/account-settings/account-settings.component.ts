import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  public linktheme = document.querySelector('#theme');
  constructor() { }

  ngOnInit(): void {
  }

  changeTheme( theme: string ) {
    const url = `./assets/css/colors/${ theme }.css`
    
    this.linktheme?.setAttribute('href', url);
    localStorage.setItem('theme', url)
  }

}