import {
  Outlet,
  useLocation,
  useLoaderData,
  useSubmit,
  useNavigation,
} from "react-router-dom";
import { useEffect } from "react";

import MainNavigation from "../components/MainNavigation";
import classes from "./RootLayout.module.css";
import { getTokenDuration } from "../util/auth";
// import { useNavigation } from "react-router-dom";

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      {/* {navigation.state === "loading" && (
        <p style={{ textAlign: "center" }}>Loading ...</p>
      )} */}
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
