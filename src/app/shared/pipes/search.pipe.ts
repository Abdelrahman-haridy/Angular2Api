import { Pipe, PipeTransform } from '@angular/core';
// import { IsearchPipe } from './../interfaces/search.interface';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(value: any, charSearch: string = ' '): any {
        return value.filter(x => x.title.toLowerCase().startsWith(charSearch.toLowerCase()));
    }
}