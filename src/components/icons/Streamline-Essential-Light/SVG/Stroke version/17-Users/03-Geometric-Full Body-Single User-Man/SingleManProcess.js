import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManProcess = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-process_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-process_svg__cls-1"
      d="M12 .5l4 4M16 .5l-4 4"
    />,
    <circle
      className="single-man-process_svg__cls-1"
      cx={21.25}
      cy={10.75}
      r={2.25}
    />,
    <path
      className="single-man-process_svg__cls-1"
      d="M15.5 10.183a13.041 13.041 0 018-7.727M20.502 1.836l2.998.62-1.201 2.614M5.5 11v3M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6zM2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle className="single-man-process_svg__cls-1" cx={5.5} cy={4} r={3.5} />
  );

export default SvgSingleManProcess;
