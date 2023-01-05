import Link from "next/dist/client/link";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}