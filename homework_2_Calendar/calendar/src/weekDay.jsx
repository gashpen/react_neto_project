import {res} from './calendarMath'

function weekDayRender() {
    for(let i = 0; i < res.length; i += 1){
        console.log(...res[i])
    }   
}

export {weekDayRender};