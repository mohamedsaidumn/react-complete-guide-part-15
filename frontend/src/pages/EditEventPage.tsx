import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const data: any = useRouteLoaderData("event-detail");
  return <EventForm method="PATCH" event={data.event} />;
}

export default EditEventPage;
