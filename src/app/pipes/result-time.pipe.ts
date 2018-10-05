import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'resultTime' })
export class ResultTimePipe implements PipeTransform {
    transform(dateTimeString: string): string {
        let ticks: number = Date.parse(dateTimeString);
        
        var hours: number;
        var minutes: number;
        var seconds: number;
        var returnString: string = '';

        if (isNaN(ticks)) {
            return '';
        } else {
            let parsedDate = new Date(ticks)
            hours = parsedDate.getUTCHours() +2;
            minutes = parsedDate.getMinutes();
            seconds = parsedDate.getSeconds();

            if (hours >= 24){ hours = hours-24 };
            if (hours > 0){ returnString = hours.toString().padStart(2, '0') + ':' }
            returnString = returnString + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

            return returnString;
        }
    }
}
