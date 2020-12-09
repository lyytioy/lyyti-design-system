import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveBold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M7.5 12l-6.293 6.293a1 1 0 000 1.414l3.086 3.086a1 1 0 001.414 0L12 16.5l6.293 6.293a1 1 0 001.414 0l3.086-3.086a1 1 0 000-1.414L16.5 12l6.293-6.293a1 1 0 000-1.414l-3.086-3.086a1 1 0 00-1.414 0L12 7.5 5.707 1.207a1 1 0 00-1.414 0L1.207 4.293a1 1 0 000 1.414z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default SvgRemoveBold;
