import { Fragment } from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Another event",
  },
];

function EventsPage() {
  return (
    <Fragment>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => {
          return (
            <li key={event.id}>
              <Link to={event.id}>{event.id}</Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default EventsPage;
