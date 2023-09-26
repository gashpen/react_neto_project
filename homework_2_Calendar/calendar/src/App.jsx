import './App.css'
import moment from 'moment'; 
import 'moment/locale/ru'
import { weekDayRender } from './weekDay';
import { res } from './calendarMath';
import { CalendarGrid } from './calendarGrid';

function App() {


  return <>
            <div className='ui-datepicker'>
              <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{moment().format('dddd')}</div>
                <div className="ui-datepicker-material-date">
                  <div className="ui-datepicker-material-day-num">{moment().date()}</div>
                  <div className="ui-datepicker-material-month">{moment().format('MMM')}</div>
                  <div className="ui-datepicker-material-year">{moment().format('YYYY')}</div>
                </div>
              </div>
              <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                  <span className="ui-datepicker-month">{moment().format("MMM")}</span>&nbsp;<span className="ui-datepicker-year">{moment().format('YYYY')}</span>
                </div>
              </div>
              <table className='ui-datepicker-calendar'>
                <thead>
                  <div className='ui-datepicker-week-wrapper'>
                    <th scope="col" title="Понедельник">Пн</th>
                    <th scope="col" title="Вторник">Вт</th>
                    <th scope="col" title="Среда">Ср</th>
                    <th scope="col" title="Четверг">Чт</th>
                    <th scope="col" title="Пятница">Пт</th>
                    <th scope="col" title="Суббота">Сб</th>
                    <th scope="col" title="Воскресенье">Вс</th>
                  </div>
                </thead >
                <tbody>
                <CalendarGrid/>
                </tbody>
              </table>
            </div>
         </>
}

export default App
