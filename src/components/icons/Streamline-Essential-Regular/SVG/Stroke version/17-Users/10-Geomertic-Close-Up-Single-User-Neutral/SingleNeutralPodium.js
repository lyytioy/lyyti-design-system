import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralPodium = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-podium_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-podium_svg__cls-1"
      d="M4.5 15.75h15M15.75 23.25h-7.5l-.75-7.5h9l-.75 7.5z"
    />,
    <circle
      className="single-neutral-podium_svg__cls-1"
      cx={12}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-podium_svg__cls-1"
      d="M16.5 12.75a4.5 4.5 0 00-9 0"
    />
  );

export default SvgSingleNeutralPodium;
