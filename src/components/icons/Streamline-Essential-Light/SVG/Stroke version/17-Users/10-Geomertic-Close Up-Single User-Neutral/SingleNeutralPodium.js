import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralPodium = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-podium_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-podium_svg__cls-1"
      d="M6.5 14.5V14a5.5 5.5 0 1111 0v.5"
    />,
    <circle
      className="single-neutral-podium_svg__cls-1"
      cx={11.944}
      cy={3.75}
      r={3.25}
    />,
    <path
      className="single-neutral-podium_svg__cls-1"
      d="M21 16.5l-1.5 7M4.5 23.5l-1.5-7M1 16.5h22"
    />
  );

export default SvgSingleNeutralPodium;
