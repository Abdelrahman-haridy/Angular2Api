import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/oprator/map';

@Injectable()
export class PhotosServiceService {
    id:string;
    private photoUrl:string;
    constructor(private _http:Http) { }

    fatchPhoto(id:string) {
        this.photoUrl = 'https://jsonplaceholder.typicode.com/albums/'+id+'/photos';
        return this._http.get(this.photoUrl)
        .map(res => res.json())
    }
}