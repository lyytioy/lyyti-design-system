import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManAim = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-aim_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="single-man-aim_svg__cls-1" cx={17.5} cy={6.5} r={5} />,
    <path
      className="single-man-aim_svg__cls-1"
      d="M17.5.5v3M17.5 9.5v3M11.5 6.5h3M20.5 6.5h3M17.5 6.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M5.5 11v3M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6zM2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle className="single-man-aim_svg__cls-1" cx={5.5} cy={4} r={3.5} />
  );

export default SvgSingleManAim;
