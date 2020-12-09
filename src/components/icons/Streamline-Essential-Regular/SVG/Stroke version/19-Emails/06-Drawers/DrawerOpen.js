import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerOpen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M17.168 8.25a5.951 5.951 0 01-10.336 0H2.25a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgDrawerOpen;
