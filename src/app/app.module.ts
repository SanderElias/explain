import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { BannerComponent } from './components/banner/banner.component';
import { SideComponent } from './components/side/side.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PrehistoryComponent } from './components/pages/prehistory/prehistory.component';
import { AncientComponent } from './components/pages/ancient/ancient.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BannerComponent,
    SideComponent,
    HomeComponent,
    PrehistoryComponent,
    AncientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
