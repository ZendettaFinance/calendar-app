import React, {useState} from 'react';
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { enGB, eo, ru } from 'date-fns/locale';
import "react-big-calendar/lib/css/react-big-calendar.css";
import './App.css';



const locales = {
  "en-GB": enGB
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});
const events = [
{
  title: "Big Meeting",
  allDay:true,
  start: new Date(2022,3,2),
  end: new Date(2022,3,5)
},
{
  title: "Vaccation",
  start: new Date(2022, 3, 7),
  end: new Date(2022, 3, 10)
},
{
  title: "ZeFi Meeting",
  start: new Date(2022, 3, 7),
  end: new Date(2022, 3, 7)
},
{
  title: "Calendar Trial",
  start: new Date(2022, 3, 14),
  end: new Date(2022, 3, 16)
},
{
  title: "Confrence",
  start: new Date(2022,3,17),
  end: new Date(2022,3,22)
}]

export default function App() {
  
  return (
    <div>
      <h1>Blockchain Events</h1>
      <Calendar
      culture={"en-GB"}
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{height:700,margin:"50px"}}
      eventPropGetter={(events) => {
      const backgroundColor =  '#FDD32A';
        return { style: { backgroundColor } }}}
    />
    </div> 
  );
}

