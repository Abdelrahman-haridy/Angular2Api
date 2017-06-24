import { RouterModule, Routes} from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const appRoutes: Routes = [
    { path: 'home', component: AlbumsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'photos/:id', component: PhotosComponent },
    { path: '', pathMatch: 'full', redirectTo: '/' },
    { path: '**', component: NotfoundComponent }
];
