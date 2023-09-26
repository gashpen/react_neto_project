import moment from 'moment'; 
import 'moment/locale/ru'


  window.moment = moment()
  moment.updateLocale("en",{week: {dow:1}})
  const startDay = moment().startOf('month').startOf('week');
  const endDay = moment().endOf('month').endOf('week');

  const calendar = [];
  const day = startDay.clone();

  while(!day.isAfter(endDay)){
    calendar.push(day.clone());
    day.add(1, 'day')
  }
 
const res = calendar.reduce((acc,current)=>{

    if(acc[acc.length-1].length == 7){
      acc.push([]);
    }

    acc[acc.length-1].push(current);
    return acc;
  }, [[]]);

  export {res,startDay};