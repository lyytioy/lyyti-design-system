import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActions = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions_svg__cls-1"
      cx={12}
      cy={7.75}
      r={4.25}
    />,
    <path
      className="single-neutral-actions_svg__cls-1"
      d="M5 20.5a7 7 0 0114 0z"
    />
  );

export default SvgSingleNeutralActions;
