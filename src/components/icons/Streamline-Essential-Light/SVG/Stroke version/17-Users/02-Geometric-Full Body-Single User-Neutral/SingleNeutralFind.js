import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralFind = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-find_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-find_svg__cls-1"
      cx={10.5}
      cy={5.5}
      r={2}
    />,
    <path
      className="single-neutral-find_svg__cls-1"
      d="M11.611 18L12 14.5h1.5v-3a3 3 0 00-6 0v3H9l.389 3.5"
    />,
    <circle
      className="single-neutral-find_svg__cls-1"
      cx={10.5}
      cy={10.5}
      r={10}
    />,
    <path
      className="single-neutral-find_svg__cls-1"
      d="M23.5 23.5l-5.929-5.929"
    />
  );

export default SvgSingleNeutralFind;
