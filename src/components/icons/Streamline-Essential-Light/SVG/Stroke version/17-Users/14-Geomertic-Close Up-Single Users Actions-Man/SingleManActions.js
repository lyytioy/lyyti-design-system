import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActions = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions_svg__cls-1"
      d="M5 20.5a7 7 0 0114 0zM8.338 5.592a7.062 7.062 0 007.873 1.583"
    />,
    <circle
      className="single-man-actions_svg__cls-1"
      cx={12}
      cy={7.75}
      r={4.25}
    />
  );

export default SvgSingleManActions;
