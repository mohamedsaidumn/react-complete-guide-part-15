import classes from "./EventItem.module.css";
import { Link } from "react-router-dom";
import { EventsType } from "../types";
import { useSubmit } from "react-router-dom";

interface EventFormProps {
  event: EventsType;
}

function EventItem(props: EventFormProps) {
  const submit = useSubmit();
  const { event } = props;

  console.log(isEventType(event));

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
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

function isEventType(variable: any): variable is EventsType {
  return (
    typeof variable === "object" &&
    typeof variable.id === "string" &&
    typeof variable.title === "string" &&
    typeof variable.date === "string" &&
    typeof variable.image === "string" &&
    typeof variable.description === "string"
  );
}

export default EventItem;
