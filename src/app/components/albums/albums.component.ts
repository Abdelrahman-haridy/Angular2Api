import { Component, OnInit } from '@angular/core';
import { AlbumsServiceService } from '../../services/albums-service.service';
import { Albums } from '../../../Albums';

@Component({
    moduleId: module.id,
    selector: 'albums-list',
    templateUrl: 'albums.component.html',
    providers: [ AlbumsServiceService ]
})

export class AlbumsComponent implements OnInit {
    albumsRes: Albums[];
    constructor(private _albumsService:AlbumsServiceService) { }

    ngOnInit() {
        this.fatchAlbums();
    }
    fatchAlbums() {
        this._albumsService.fatchAlbums().subscribe(res => {
            this.albumsRes = res;
        })
    }
}

