import { Fragment } from "react";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
import { EventsListType } from "../types";

function EventsPage() {
  const events = useLoaderData();
  return (
    <Fragment>{<EventsList events={events as EventsListType} />}</Fragment>
  );
}

export default EventsPage;
