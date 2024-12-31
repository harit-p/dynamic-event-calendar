import React, { useState, useEffect } from "react";
import CalendarGrid from "./CalendarGrid";
import EventModal from "./EventModal";
import EventFilter from "./EventFilter";
import { Button } from "./components/ui/button";

const CalendarApp = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState(() => JSON.parse(localStorage.getItem("events")) || {});
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventForm, setEventForm] = useState({
    name: "",
    startTime: "",
    endTime: "",
    description: "",
    type: "Personal",
  });
  const [filterKeyword, setFilterKeyword] = useState("");

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };

  const handleEventSubmit = (eventForm, selectedDay) => {
    const dayKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${selectedDay}`;

    if (!events[dayKey]) {
      events[dayKey] = [];
    }

    events[dayKey].push({ ...eventForm });
    setEvents({ ...events });
    setEventForm({ name: "", startTime: "", endTime: "", description: "", type: "Personal" });
    setIsModalOpen(false);
  };

  const filteredEvents = filterKeyword
    ? Object.fromEntries(
        Object.entries(events).map(([dayKey, dayEvents]) => [
          dayKey,
          dayEvents.filter((event) => event.name.toLowerCase().includes(filterKeyword.toLowerCase())),
        ])
      )
    : events;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-gray-800">
      <div className="p-8 w-full max-w-4xl bg-white shadow-xl rounded-lg text-gray-800">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">Dynamic Event Calendar</h1>
          <div className="flex items-center justify-center mt-4 gap-4">
            <Button
              onClick={handlePrevMonth}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg"
            >
              Previous
            </Button>
            <h2 className="text-2xl font-semibold">
              {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
            </h2>
            <Button
              onClick={handleNextMonth}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg"
            >
              Next
            </Button>
          </div>
        </header>

        <CalendarGrid
          currentDate={currentDate}
          events={filteredEvents}
          selectedDay={selectedDay}
          handleDayClick={handleDayClick}
        />

        <EventFilter filterKeyword={filterKeyword} setFilterKeyword={setFilterKeyword} />

        <EventModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          eventForm={eventForm}
          setEventForm={setEventForm}
          handleEventSubmit={handleEventSubmit}
          selectedDay={selectedDay}
        />
      </div>
    </div>
  );
};

export default CalendarApp;
