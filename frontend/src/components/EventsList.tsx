import classes from "./EventsList.module.css";
import { EventsListType } from "../types";
import { Link } from "react-router-dom";

interface EventsListProps {
  events: EventsListType;
}
function EventsList(props: EventsListProps) {
  const { events } = props;
  // console.log(typeof events);
  // console.log(events);
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event: any) => (
          <li key={event.id} className={classes.item}>
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
