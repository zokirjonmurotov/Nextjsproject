const DummyEvents = [
  {
    id: "e1",
    title: "programming",
    desc: "bu yerda qandaydir inglizcha gap bo'lishi kerak edi",
    location: "Amir Temur ko'chasi ",
    date: "2022-02-12",
    image: "images/nimadir.jpg",
    isFeatured: true,
  },
  {
    id: "e2",
    title: "programming2",
    desc: "bu yerda qandaydir inglizcha gap bo'lishi kerak edi",
    location: "Amir Temur ko'chasi ",
    date: "2022-01-12",
    image: "images/mushuk.jpg",
    isFeatured: false,
  },
  {
    id: "e3",
    title: "programming3",
    desc: "bu yerda qandaydir inglizcha gap bo'lishi kerak edi3",
    location: "Amir Temur ko'chasi 3",
    date: "2022-03-12",
    image: "images/jirafa.jpg",
    isFeatured: false,
  },
  {
    id: "e4",
    title: "bu sarlavha",
    desc: "bu yerda qandaydir inglizcha gap bo'lishi kerak edi3",
    location: "Amir Temur ko'chasi 3",
    date: "2022-05-12",
    image: "images/mushuk.jpg",
    isFeatured: true,
  },
  {
    id: "e5",
    title: "bu title",
    desc: "bu yerda qandaydir inglizcha gap bo'lishi kerak edi lekin yozishga erindim",
    location: "Amir Temur ko'chasi 3423",
    date: "2022-01-22",
    image: "images/jirafa.jpg",
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DummyEvents.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DummyEvents;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  let filteredEvents = DummyEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() == year && eventDate.getMonth() == month - 1;
  });
  return filteredEvents;
}

export function getEventById(id) {
  return DummyEvents.find((event) => event.id == id);
}
