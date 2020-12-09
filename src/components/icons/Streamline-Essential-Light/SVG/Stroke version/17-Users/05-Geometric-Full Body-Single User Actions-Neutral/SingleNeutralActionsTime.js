import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsTime = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-time_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-time_svg__cls-1"
      d="M10.232 12.382A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6h1"
    />,
    <circle
      className="single-neutral-actions-time_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <circle
      className="single-neutral-actions-time_svg__cls-1"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="single-neutral-actions-time_svg__cls-1"
      d="M19.5 17.7h-2v-3.2"
    />
  );

export default SvgSingleNeutralActionsTime;
