import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonLoop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M13 14.5s2 3 5 3a5.5 5.5 0 000-11c-5 0-7 11-12 11a5.5 5.5 0 010-11c3 0 4.5 3.5 4.5 3.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default SvgButtonLoop;
