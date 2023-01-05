import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          location={item.location}
          date={item.date}
        />
      ))}
    </ul>
  );
}

export default EventList;
