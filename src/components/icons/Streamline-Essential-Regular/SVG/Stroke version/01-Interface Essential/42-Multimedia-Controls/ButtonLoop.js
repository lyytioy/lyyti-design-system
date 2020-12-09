import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonLoop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M13.9 15.5a5.61 5.61 0 004.1 2.248 5.25 5.25 0 000-10.5c-3.75 0-6 5.25-6 5.25s-2.25 5.25-6 5.25a5.25 5.25 0 010-10.5A5.617 5.617 0 0110.1 9.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgButtonLoop;
