import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-circle_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-circle_svg__cls-1"
      cx={12}
      cy={12}
      r={11.5}
    />,
    <circle
      className="single-neutral-circle_svg__cls-1"
      cx={12}
      cy={8.75}
      r={4.25}
    />,
    <path
      className="single-neutral-circle_svg__cls-1"
      d="M18.317 18.5a6.988 6.988 0 00-12.634 0"
    />
  );

export default SvgSingleNeutralCircle;
