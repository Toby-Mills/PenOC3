import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDistance'
})
export class CourseDistancePipe implements PipeTransform {

  transform(metres: number) {
    return metres/1000 + ' km';
  }

}
