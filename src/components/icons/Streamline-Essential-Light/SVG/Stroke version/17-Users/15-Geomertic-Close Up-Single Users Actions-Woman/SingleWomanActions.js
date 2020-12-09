import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActions = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions_svg__cls-1"
      d="M4.5 20.5a7 7 0 0114 0zM16.6 12.1a5.506 5.506 0 01-.8-3.054V7.8a4.3 4.3 0 10-8.6 0v1.248a5.506 5.506 0 01-.8 3.052"
    />,
    <path
      className="single-woman-actions_svg__cls-1"
      d="M7.2 8.509a5.691 5.691 0 004.3-1.97 5.691 5.691 0 004.3 1.97M15.287 8.486a3.791 3.791 0 01-7.574 0"
    />
  );

export default SvgSingleWomanActions;
