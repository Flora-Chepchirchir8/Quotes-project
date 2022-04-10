import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value:any):any {
   if (value) {
      const seconds = Math.floor((+new Date() - +value) / 1000);
      if (seconds < 30) {
        return 'Posted just now';
      }
      if (seconds > 29 && seconds <= 59){
        return 'Posted '+seconds +' seconds ago';
      }
      let secondsInMin = 60;
      let minutes =  Math.floor(seconds / secondsInMin);
      if (minutes == 1){
        return 'Posted '+minutes +' minute ago';
      }
      if (minutes >=1 && minutes < 60){
        return 'Posted '+minutes +' minutes ago';
      }
      let secondsInHours = 3600;
      let hours = Math.floor(seconds / secondsInHours);
      if (hours ===1){
        return 'Posted '+hours +' hour ago';
      }
      if (hours >1 && hours < 25){
        return 'Posted '+hours +' hours ago';
      }
      let secondsInDays = 86400;
      let day = Math.floor(seconds / secondsInDays);
      if (day ===1){
        return 'Posted '+day +' day ago';
      }
      if (day >1){
        return 'Posted '+day +' days ago';
      }
    }
    else {
      return value;
    }  
  }

}
