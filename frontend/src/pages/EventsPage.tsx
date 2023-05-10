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

export const loader = async (): Promise<EventsListType> => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    //...Deal with it Later
  } else {
    const resData = await response.json();
    return resData.events as EventsListType;
  }
  const ret: EventsListType = [];
  return ret;
};

export default EventsPage;
