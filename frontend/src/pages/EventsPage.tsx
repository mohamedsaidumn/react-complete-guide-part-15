import { Fragment } from "react";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
import { EventsListType } from "../types";

function EventsPage() {
  const data: any = useLoaderData();
  const events: EventsListType = data.events;

  return <Fragment>{<EventsList events={events} />}</Fragment>;
}

export const loader = async (): Promise<Response> => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    //...Deal with it Later
    throw Error("Something Went wrong");
  } else {
    const resData = await response;
    return resData;
  }
};

export default EventsPage;
