import React from "react";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { DropdownMenu } from "./components/ui/dropdown-menu";
import { Button } from "./components/ui/button";


const EventModal = ({ isModalOpen, setIsModalOpen, eventForm, setEventForm, handleEventSubmit, selectedDay }) => {
  return (
    <div open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="ml-7 p-5 ">
        <h2 className="text-xl font-bold mb-4">Add Event</h2>
        <Input
          placeholder="Event Name"
          value={eventForm.name}
          onChange={(e) => setEventForm({ ...eventForm, name: e.target.value })}
        /><br></br>
        <Input
          type="time"
          placeholder="Start Time"
          value={eventForm.startTime}
          onChange={(e) => setEventForm({ ...eventForm, startTime: e.target.value })}
        /><br></br>
        <Input
          type="time"
          placeholder="End Time"
          value={eventForm.endTime}
          onChange={(e) => setEventForm({ ...eventForm, endTime: e.target.value })}
        /><br></br>
        <Textarea
          placeholder="Description"
          value={eventForm.description}
          onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
        /><br></br>
        <DropdownMenu
          options={["Work", "Personal", "Others"]}
          value={eventForm.type}
          onChange={(value) => setEventForm({ ...eventForm, type: value })}
        />
        <Button className="mt-3" onClick={() => handleEventSubmit(eventForm, selectedDay)}>
          Save Event
        </Button>
      </div>
    </div>
  );
};

export default EventModal;
