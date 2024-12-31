# Dynamic Event Calendar Application

## Objective

Build a **Dynamic Event Calendar Application** to evaluate skills in advanced React.js logic, clean UI design, and deployment capabilities.

---

## Features

### Feature Set

#### Calendar View
- The calendar grid for the current month is displayed, with all days properly aligned.
- Users can easily switch between months using "Previous" and "Next" buttons, ensuring smooth navigation.

#### Event Management
- Users can add, edit, and delete events by interacting with the calendar.
- Each event includes:
  - Event name
  - Start time
  - End time
  - Optional description.
- Events are linked to specific days and can be edited or removed at any time.

#### Event List
- A modal or side panel displays a list of all events for the selected day. This gives users a quick overview of their schedule for any given day.

### Data Persistence
- Implemented **localStorage** to persist events between page refreshes, ensuring that user data remains intact even if the page is reloaded.

---

## UI Requirements

- Used **shadcn** for components, resulting in a clean and modern UI.
- Days are displayed in a grid with clear separation for weekends and weekdays, making navigation intuitive.
- The current day is highlighted visually, and the selected day is clearly indicated to avoid confusion.

---

## Complex Logic

### Month Transition Handling
- Automatically handles transitions between months, including edge cases like from January 31st to February 1st, ensuring that the calendar grid always displays the correct number of days.

### Event Overlap Prevention
- Logic prevents overlapping events for the same time slot. If a user tries to schedule an event during a time that’s already occupied, they are prompted to choose a different time.

### Event Filtering
- Users can filter events by keyword, making it easy to find specific events based on their name or description.

---

## Bonus Features

### Drag-and-Drop Functionality
- Added drag-and-drop support for rescheduling events between days. This allows users to quickly move events around the calendar without needing to manually edit the event details.

### Color Coding for Events
- Events can be color-coded based on categories like work, personal, or others. This adds visual clarity and helps users quickly differentiate between event types.

---

## Instructions

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/harit-p/dynamic-event-calendar.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dynamic-event-calendar
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```
5. Access the application at:
   [http://localhost:3000](http://localhost:3000)

### Deployment Link
- Deployed Application: [https://dynamic-event-calendar-taupe.vercel.app/](https://dynamic-event-calendar-taupe.vercel.app/)

---

## Bonus Features (Implemented)

- [ ] Drag-and-drop functionality to reschedule events.
- [ ] Color coding for events.

---

## Contact

For queries or feedback, reach out:
- **GitHub**: [harit-p](https://github.com/harit-p)