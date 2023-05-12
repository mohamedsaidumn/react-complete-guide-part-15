import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayoutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import EventDetailPage, {
  loader as eventsDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import EventsRootLayout from "./pages/EventsRootLayoutPage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, //path:""
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventsDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
