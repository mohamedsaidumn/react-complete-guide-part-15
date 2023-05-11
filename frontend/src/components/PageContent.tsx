import classes from "./PageContent.module.css";
import { ReactNode } from "react";

function PageContent(props: { title: string; children: ReactNode }) {
  return (
    <div className={classes.content}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}

export default PageContent;
