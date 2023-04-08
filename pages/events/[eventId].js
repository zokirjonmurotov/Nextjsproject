import { useRouter } from "next/router";
import EventDetail from "../../components/events/event-detail";
import { getEventById } from "../../dummy-data";
function EventDetails() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <EventDetail
        id={event.id}
        image={event.image}
        title={event.title}
        location={event.location}
        date={event.date}
        desc={event.desc}
      />
    </div>
  );
}

export default EventDetails;
