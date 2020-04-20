import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  isDarkTheme: Observable<boolean>;

  constructor(
    // private changeDetectorRef: ChangeDetectorRef,
    private themeService: ThemeService) { }

  ngOnInit() {
    // TODO: What is the best method to use to avoid the Modified after set error
    // setTimeout(() => { this.isDarkTheme = this.themeService.isDarkTheme; });
    // this.isDarkTheme = this.themeService.isDarkTheme;
    // this.changeDetectorRef.detectChanges();
    Promise.resolve(null).then(() => {
      this.isDarkTheme = this.themeService.isDarkTheme;
    });
  }
}
