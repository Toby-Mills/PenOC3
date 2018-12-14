import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'resultTime' })
export class ResultTimePipe implements PipeTransform {
    transform(dateTimeString: string): string {
        if(dateTimeString){
            var hour = dateTimeString.slice(11,13);
            var minute = dateTimeString.slice(14,16);
            var second = dateTimeString.slice(17,19);

            return `${hour}:${minute}:${second}`;
        }else{
            return '';
        }
    }
}
