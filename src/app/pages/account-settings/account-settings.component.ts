import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  public linktheme = document.querySelector('#theme');
  public links!: NodeListOf<Element>; 
  constructor() { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentTheme()
  }

  changeTheme( theme: string ) {
    const url = `./assets/css/colors/${ theme }.css`
    
    this.linktheme?.setAttribute('href', url);
    localStorage.setItem('theme', url)
    
    this.checkCurrentTheme();
    
  }

  checkCurrentTheme() {
    this.links.forEach( elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linktheme?.getAttribute('href');

      if ( btnThemeUrl === currentTheme ) {
        elem.classList.add('working');
      }

    } )
  }

}
