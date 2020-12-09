import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M5.625 12.75l11.859-4.629a1.5 1.5 0 000-2.742L5.625.75v22.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgFlagTriangle;
