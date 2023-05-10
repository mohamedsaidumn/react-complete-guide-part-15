import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import classes from "./RootLayout.module.css";
import { useNavigation } from "react-router-dom";

function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" && (
        <p style={{ textAlign: "center" }}>Loading ...</p>
      )}
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
