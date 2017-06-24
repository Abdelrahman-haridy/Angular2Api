import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsServiceService {
    private albumsUrl: string= 'https://jsonplaceholder.typicode.com/albums';

    constructor(private _http:Http) { }
     fatchAlbums() {
         return this._http.get(this.albumsUrl)
         .map(res => res.json());
     }
}
