import React, { useState, useEffect } from "react";
/*import { render } from "react-dom";*/
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
moment.locale("en-GB");
const localizer = momentLocalizer(moment);
const myEventsList = []; //empty object for now

function AppCalendar(){
    return(
      <div class = "align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500,width: '100%'}}
      />
      </div>
    );
  }
export default AppCalendar;