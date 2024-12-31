import React from "react";
import { Input } from "./components/ui/input";

const EventFilter = ({ filterKeyword, setFilterKeyword }) => {
  return (
    <div className="mt-5">
      <Input
        placeholder="Filter events by keyword"
        value={filterKeyword}
        onChange={(e) => setFilterKeyword(e.target.value)}
      />
    </div>
  );
};

export default EventFilter;
