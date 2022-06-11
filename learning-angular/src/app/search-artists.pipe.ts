import { CompilePipeMetadata } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

  transform(pipeDate, pipeModifier): any {
    return pipeDate.filter(eachItem => {
      return (
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}
