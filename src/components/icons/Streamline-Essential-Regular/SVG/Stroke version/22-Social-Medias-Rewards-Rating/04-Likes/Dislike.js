import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDislike = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M23.25 2.25v10.5h-1.5a7.5 7.5 0 00-7.5 7.5V21a2.25 2.25 0 01-4.5 0v-3.75a1.5 1.5 0 00-1.5-1.5h-3A4.5 4.5 0 01.773 10.8l.465-4.649A6 6 0 017.208.75h6.2a6.006 6.006 0 011.648.231l3.634 1.038a6.006 6.006 0 001.648.231h2.91"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgDislike;
