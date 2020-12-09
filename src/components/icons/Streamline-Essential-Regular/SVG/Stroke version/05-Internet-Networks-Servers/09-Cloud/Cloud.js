import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloud = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M18.375 19.5a4.875 4.875 0 10-2.764-8.885A7.5 7.5 0 108.25 19.5z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgCloud;
