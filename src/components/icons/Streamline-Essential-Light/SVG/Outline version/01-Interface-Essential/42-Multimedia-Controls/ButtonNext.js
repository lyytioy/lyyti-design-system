import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonNext = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 23.999c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-23c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11z" />,
    <path d="M15 16.999a1 1 0 01-1-1v-8c0-.551.448-1 1-1h1c.552 0 1 .449 1 1v8a1 1 0 01-1 1h-1zm0-1h1v-8h-1v8zM8 16.376a1 1 0 01-1-1V8.621c0-.247.091-.484.256-.667a.992.992 0 01.69-.33l.055-.001c.246 0 .483.091.667.256l3.754 3.378a1.002 1.002 0 010 1.486L8.668 16.12a.999.999 0 01-.668.256zm0-1l3.753-3.377L8 8.622v6.754z" />
  );

export default SvgButtonNext;
