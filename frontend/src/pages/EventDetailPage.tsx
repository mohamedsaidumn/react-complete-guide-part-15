import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { json } from "react-router-dom";
import { useRouteLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const params = useParams();
  const data: any = useRouteLoaderData("event-detail");

  return (
    <Fragment>
      <EventItem event={data.event} />
    </Fragment>
  );
}

export async function loader(props: any) {
  const { request, params } = props;
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export async function action(props: any) {
  const { request, params } = props;
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}

export default EventDetailPage;
