import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(details:any=[],searchValue:string): any {
    if(!details || !searchValue){
        return details
    }
    return details.filter((Collect:any)=>
        Collect.bookId.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        Collect.bookTitle.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        Collect.language.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 


         );
  }
}

