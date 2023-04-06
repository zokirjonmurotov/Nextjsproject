import EventList from "../../components/events/event-list";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
function FilterredEventsPage() {
  const router = useRouter();
  const dateArray = router.query.slugs;
  const date = {
    year: dateArray[0],
    month: dateArray[1],
  };
  const filteredEvents = getFilteredEvents(date);
  return (
    <>
      <EventList items={filteredEvents} />
    </>
  );
}

export default FilterredEventsPage;
