import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManHierachy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-hierachy_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-hierachy_svg__cls-1"
      d="M13.5 12.5h6M19.5 3.5h-2a2 2 0 00-2 2v13a2 2 0 002 2h2"
    />,
    <circle
      className="single-man-hierachy_svg__cls-1"
      cx={21.5}
      cy={3.5}
      r={2}
    />,
    <circle
      className="single-man-hierachy_svg__cls-1"
      cx={21.5}
      cy={12.5}
      r={2}
    />,
    <circle
      className="single-man-hierachy_svg__cls-1"
      cx={21.5}
      cy={20.5}
      r={2}
    />,
    <path
      className="single-man-hierachy_svg__cls-1"
      d="M5.5 11v3M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6zM2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-hierachy_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />
  );

export default SvgSingleManHierachy;
