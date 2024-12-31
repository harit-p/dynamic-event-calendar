import React from "react";
import { Badge } from "./components/ui/badge";

const CalendarGrid = ({ currentDate, events, selectedDay, handleDayClick }) => {
  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  return (
    <div className="grid grid-cols-7 gap-4 mt-8 border-t pt-4">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <div key={day} className="font-bold text-lg text-gray-600">
          {day}
        </div>
      ))}

      {[...Array(startOfMonth)].map((_, index) => (
        <div key={index}></div>
      ))}

      {[...Array(daysInMonth(currentDate.getMonth(), currentDate.getFullYear()))].map((_, day) => (
        <div
          key={day}
          className={`p-3 border rounded-lg cursor-pointer text-center shadow-sm ${
            selectedDay === day + 1 ? "bg-blue-100 border-blue-400" : "bg-white"
          } hover:shadow-md`}
          onClick={() => handleDayClick(day + 1)}
        >
          <span className="block font-medium text-gray-700">{day + 1}</span>

          {events[`${currentDate.getFullYear()}-${currentDate.getMonth()}-${day + 1}`]?.map((event, idx) => (
            <Badge key={idx} className="block mt-1 text-xs bg-green-100 text-green-700 rounded">
              {event.name}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalendarGrid;
