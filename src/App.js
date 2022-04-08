import React, {useState} from 'react';
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { enGB, eo, ru } from 'date-fns/locale';
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
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
  const [newEvent, setNewEvent] = useState({title:"", start:"", end:""})
  const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent(){
    setAllEvents([...allEvents, newEvent])
  }
  
  return (
    <div>
      <h1>Blockchain Events</h1>
      <h3>Add New Event</h3>
      <div>
        <input type="text" placeholder='Add a Title' style = {{width:"20%",marginRight:"10px"}}
        value = {newEvent.title} onChange = {
          (e) => setNewEvent({...newEvent,title:e.target.value})
        }/>
        <DatePicker placeholderText='Start Date' style ={{marginRight:"10px"}}
        selected = {newEvent.start} onChange = {(start) => setNewEvent({...newEvent, start})}/>
        <DatePicker placeholderText='End Date' style ={{marginRight:"10px"}}
        selected = {newEvent.end} onChange = {(end) => setNewEvent({...newEvent, end})}/>
        <button  onClick={handleAddEvent}>Add Event</button>
      </div>
      <Calendar
      culture={"en-GB"}
      localizer={localizer}
      events={allEvents}
      startAccessor="start"
      endAccessor="end"
      style={{height:700,margin:"50px"}}
      eventPropGetter={(allEvents) => {
      const backgroundColor =  '#FDD32A';
        return { style: { backgroundColor } }}}
    />
    </div> 
  );
}

