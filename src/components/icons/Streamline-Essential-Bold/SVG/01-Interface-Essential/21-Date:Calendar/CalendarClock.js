import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 16.5A.5.5 0 012 16V7.5a.5.5 0 01.5-.5H16a.5.5 0 01.5.5v2.07a7.281 7.281 0 012 0V3a1 1 0 00-1-1H15a.25.25 0 01-.25-.25v-1a.75.75 0 10-1.5 0V4.5a.75.75 0 11-1.5 0v-2a.5.5 0 00-.5-.5H7a.25.25 0 01-.25-.25v-1a.75.75 0 00-1.5 0V4.5a.75.75 0 11-1.5 0v-2a.5.5 0 00-.5-.5H1a1 1 0 00-1 1v13.5a2 2 0 002 2h7.569a7.281 7.281 0 010-2z" />,
    <path d="M17.5 11a6.5 6.5 0 106.5 6.5 6.508 6.508 0 00-6.5-6.5zm0 11a4.5 4.5 0 114.5-4.5 4.505 4.505 0 01-4.5 4.5z" />,
    <path d="M19.5 16.751h-1.25V15a.75.75 0 10-1.5 0v2.5a.75.75 0 00.75.75h2a.75.75 0 000-1.5z" />
  );

export default SvgCalendarClock;
