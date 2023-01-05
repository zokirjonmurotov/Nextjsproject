import { useRouter } from "next/router";
import EventDetail from "../../components/events/event-detail";
import { getEventById } from "../../dummy-data";
function EventDetails() {
  const router = useRouter();
  const eventId = router.query.eventId;
  console.log(router.query);
  console.log(eventId);
  const event = getEventById(eventId);
  console.log(event);
  return (
    <div>
      <EventDetail
        id={event.id}
        image={event.image}
        title={event.title}
        location={event.location}
        date={event.date}
      />
    </div>
  );
}

export default EventDetails;
