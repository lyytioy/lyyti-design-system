import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveTopLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5.499H.5v16"
    />
  );

export default SvgMoveTopLeft;
