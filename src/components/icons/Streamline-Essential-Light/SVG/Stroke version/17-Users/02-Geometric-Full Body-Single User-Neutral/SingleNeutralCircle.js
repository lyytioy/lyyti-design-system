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
      cy={6.25}
      r={3.25}
    />,
    <circle
      className="single-neutral-circle_svg__cls-1"
      cx={12}
      cy={12}
      r={11.5}
    />,
    <path
      className="single-neutral-circle_svg__cls-1"
      d="M14.045 21l.455-2.5h2v-3a4.5 4.5 0 00-9 0v3h2l.455 2.5"
    />
  );

export default SvgSingleNeutralCircle;
