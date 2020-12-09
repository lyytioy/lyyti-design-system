import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleMan2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-man-2_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-man-2_svg__cls-1"
      d="M9.75 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5h2.5l.5 6zM14.407 19.385l.343 4.115h4l.5-6h2.5V14a5 5 0 00-8-4M4.734 2.223A5.809 5.809 0 008.917 4a5.822 5.822 0 002.3-.473"
    />,
    <circle className="multiple-man-2_svg__cls-1" cx={7.75} cy={4} r={3.5} />,
    <path
      className="multiple-man-2_svg__cls-1"
      d="M13.734 2.223A5.809 5.809 0 0017.917 4a5.822 5.822 0 002.3-.473"
    />,
    <circle className="multiple-man-2_svg__cls-1" cx={16.75} cy={4} r={3.5} />
  );

export default SvgMultipleMan2;
