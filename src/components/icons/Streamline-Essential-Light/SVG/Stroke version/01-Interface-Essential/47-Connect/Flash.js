import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 23.498l3-11H7l3-12h8l-5 8h5l-10 15z"
    />
  );

export default SvgFlash;
