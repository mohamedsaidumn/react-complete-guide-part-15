import { Fragment, Suspense } from "react";
import EventsList from "../components/EventsList";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { EventsListType } from "../types";

function EventsPage() {
  const data: any = useLoaderData();
  const events: EventsListType = data.events;

  return (
    <Fragment>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadEvents) => {
            return <EventsList events={loadEvents} />;
          }}
        </Await>
      </Suspense>
    </Fragment>
  );
}

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    //...Deal with it Later
    // throw Error("Something Went wrong");
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};

export default EventsPage;
