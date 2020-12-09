import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-circle_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="multiple-circle_svg__cls-1" cx={12} cy={3.75} r={3} />,
    <path
      className="multiple-circle_svg__cls-1"
      d="M15.75 14.25V12a3.75 3.75 0 00-7.5 0v2.25h1.5l.75 6h3l.75-6z"
    />,
    <circle className="multiple-circle_svg__cls-1" cx={4.5} cy={6} r={2.25} />,
    <path
      className="multiple-circle_svg__cls-1"
      d="M5.7 9.947A3.753 3.753 0 00.75 13.5v.75h1.5l.75 4.5h3l.376-2.256"
    />,
    <circle className="multiple-circle_svg__cls-1" cx={19.5} cy={6} r={2.25} />,
    <path
      className="multiple-circle_svg__cls-1"
      d="M18.3 9.947a3.753 3.753 0 014.95 3.553v.75h-1.5l-.75 4.5h-3l-.376-2.256M23.25 21c0 1.243-5.037 2.25-11.25 2.25S.75 22.243.75 21"
    />
  );

export default SvgMultipleCircle;
