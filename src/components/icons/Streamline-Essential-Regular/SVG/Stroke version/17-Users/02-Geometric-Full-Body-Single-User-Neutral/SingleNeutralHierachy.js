import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralHierachy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-hierachy_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-hierachy_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-hierachy_svg__cls-1"
      d="M7.5 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5z"
    />,
    <rect
      className="single-neutral-hierachy_svg__cls-1"
      x={18.75}
      y={0.75}
      width={4.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <rect
      className="single-neutral-hierachy_svg__cls-1"
      x={18.75}
      y={9.75}
      width={4.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <rect
      className="single-neutral-hierachy_svg__cls-1"
      x={18.75}
      y={18.75}
      width={4.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="single-neutral-hierachy_svg__cls-1"
      d="M18.75 11.25h-6M18.75 2.25h-1.5a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h1.5"
    />
  );

export default SvgSingleNeutralHierachy;
