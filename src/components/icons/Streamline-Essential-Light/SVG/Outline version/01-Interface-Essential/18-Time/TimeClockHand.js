import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M16.501 15.001c-4.135 0-7.5-3.365-7.5-7.5s3.365-7.5 7.5-7.5 7.5 3.365 7.5 7.5-3.364 7.5-7.5 7.5zm0-14a6.508 6.508 0 00-6.5 6.5c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5-2.915-6.5-6.5-6.5z" />,
    <path d="M16.501 8.001a.5.5 0 01-.5-.5V3.5a.5.5 0 011 0v3.501L19.5 7a.5.5 0 010 1l-2.999.001zM.5 24a.5.5 0 01-.5-.5v-10a.5.5 0 011 0V15h6.5c1.74 0 3.219 1.3 3.464 3H16.5c1.93 0 3.5 1.57 3.5 3.5a.5.5 0 01-.5.5H1v1.5a.5.5 0 01-.5.5zm18.45-3a2.52 2.52 0 00-2.449-2h-9a.501.501 0 01-.001-1h2.448A2.52 2.52 0 007.5 16H1v5h17.95z" />
  );

export default SvgTimeClockHand;
