import EventList from "../../components/events/event-list";
import FilteredEvent from "../../components/events/filtered-event";
import { getAllEvents } from "../../dummy-data";

function Events() {
  const allEvents = getAllEvents();
  return (
    <div>
      <FilteredEvent />
      <EventList items={allEvents} />
    </div>
  );
}

export default Events;
