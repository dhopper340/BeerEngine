import { CoreModule } from './core/core.module';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AngularMaterialModule } from './app-material.module';
import { BreweryService } from './brewery-list/services/brewery.service';
import { BreweryListResolver } from './brewery-list/brewery-list.resolver';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    routingComponents
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [BreweryService, BreweryListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
