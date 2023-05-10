import { Fragment } from "react";
import { useParams } from "react-router-dom";
function EventDetailPage() {
  const params = useParams();

  return (
    <Fragment>
      <h1>EventDetailPage</h1> <p>{params.eventId}</p>
    </Fragment>
  );
}

export default EventDetailPage;
