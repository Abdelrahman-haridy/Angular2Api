// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


import { PhotosServiceService } from './services/photos-service.service';
import { AlbumsServiceService } from './services/albums-service.service';
import { SearchPipe } from './shared/pipes/search.pipe';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PhotosComponent,
    AboutComponent,
    NavbarComponent,
    NotfoundComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule
  ],
  providers: [ PhotosServiceService, AlbumsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
