import { Component, OnInit } from '@angular/core';
import { PhotosServiceService } from './../../services/photos-service.service';
import { AlbumsServiceService } from './../../services/albums-service.service';
// import { searchPipe } from './../../shared/pipes/search.pipe';
import { Photos } from '../../../Photos';
import { Albums } from '../../../Albums';
import { ActivatedRoute } from '@angular/router';



@Component({
    moduleId: module.id,
    selector: 'photos-list',
    templateUrl: 'photos.component.html'
})

export class PhotosComponent implements OnInit {
    id:string;
    photosRes: Photos[];
    AlbumsRes: Albums[];
    title: string;
    searchValue: string;
    appState: string = 'default';
    SearchInput: string = '';

    constructor(
        private _photosService:PhotosServiceService,
        private _route:ActivatedRoute) { 

     }

    ngOnInit() { 
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._photosService.fatchPhoto(id).subscribe(res => {
                    this.photosRes = res;
                    // console.log(res)
                })
            })
     }

     delate(item) {
        for(let i = 0; i < this.photosRes.length; i++) {
            if(this.photosRes[i] == item) {
                this.photosRes.splice(i, 1);
            }
            // let index: number = this.photosRes.indexOf(item);
            // if (index !== -1) {
            //     this.photosRes.splice(index, 1);
            // }  
        }
    }

    addItem() {
        this.photosRes.push({
            albumId: 101,
            id: 1,
            title: this.title,
            url:"/",
            thumbnailUrl: "https://angular.io/assets/images/logos/standard/logo-nav@2x.png"
            
        });
    }

    editItem(item) {
        this.appState = 'edit';
        console.log(this.appState);
    }

}