import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WallpaperCarouselComponent } from './components/wallpaper-carousel/wallpaper-carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WallpaperCarouselComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
