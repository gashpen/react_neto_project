import { startDay } from "./calendarMath";


const CalendarGrid = () => {
    const day = startDay.clone().subtract(1, 'day');
    const totalDays = 42;
    const daysArray = [...Array(42)].map(()=> day.add(1,'day').clone())
    console.log(daysArray)
    return (
        <tr className="dateGridWrapper">
            {
                daysArray.map((dayItem)=>(
                    <td className="dateGrid" key={dayItem.format('DDMMYYYY')}>
                      {dayItem.format('DD')}  
                    </td>
                ))
            }
        </tr>
        
    )
};

export {CalendarGrid};