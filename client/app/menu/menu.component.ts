import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  title = 'Beer Engine';
  selectedTheme = '';

  public isAuthenticated: boolean;

  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) {
    this.isAuthenticated = false;
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  ngOnInit() {
    this.isDarkTheme.subscribe(val => {
      this.selectedTheme = val ? 'Dark' : 'Light';
    });
    this.themeService.setDarkTheme(false);
  }

  login() {
  }

  logout() {
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
