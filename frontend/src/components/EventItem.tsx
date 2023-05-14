import classes from "./EventItem.module.css";
import { Link } from "react-router-dom";
import { EventsType } from "../types";
import { useSubmit, useRouteLoaderData } from "react-router-dom";

interface EventFormProps {
  event: EventsType;
}

function EventItem(props: EventFormProps) {
  const token = useRouteLoaderData("root");
  const submit = useSubmit();
  const { event } = props;

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <>
        {token && (
          <menu className={classes.actions}>
            <Link to="edit">Edit</Link>
            <button onClick={startDeleteHandler}>Delete</button>
          </menu>
        )}
      </>
    </article>
  );
}

export default EventItem;
