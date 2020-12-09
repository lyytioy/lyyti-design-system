import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActions = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions_svg__cls-1"
      cx={12}
      cy={6}
      r={5.25}
    />,
    <path
      className="single-neutral-actions_svg__cls-1"
      d="M2.25 23.25a9.75 9.75 0 0119.5 0"
    />
  );

export default SvgSingleNeutralActions;
