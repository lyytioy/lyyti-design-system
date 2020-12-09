import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralProcess = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-process_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-process_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-process_svg__cls-1"
      d="M7.5 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5z"
    />,
    <circle
      className="single-neutral-process_svg__cls-1"
      cx={20.25}
      cy={14.25}
      r={3}
    />,
    <path
      className="single-neutral-process_svg__cls-1"
      d="M11.25.75l4.5 4.5M15.75.75l-4.5 4.5M18.75 2.25h4.5v4.5M23.25 2.25L12.75 12"
    />
  );

export default SvgSingleNeutralProcess;
