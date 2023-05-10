import { Fragment } from "react";
import EventsList from "../components/EventsList";
import { useState, useEffect } from "react";

function EventsPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/events");

      if (!response.ok) {
        setError("Fetching events failed.");
      } else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);
  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </Fragment>
  );
}

export default EventsPage;
