import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanProcess = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-process_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-process_svg__cls-1"
      d="M12 .5l4 4M16 .5l-4 4"
    />,
    <circle
      className="single-woman-process_svg__cls-1"
      cx={21.25}
      cy={10.75}
      r={2.25}
    />,
    <path
      className="single-woman-process_svg__cls-1"
      d="M15.5 10.183a13.041 13.041 0 018-7.727M20.502 1.836l2.998.62-1.201 2.614"
    />,
    <circle
      className="single-woman-process_svg__cls-1"
      cx={6}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-woman-process_svg__cls-1"
      d="M2.547 4.577A4.633 4.633 0 006 2.974a4.632 4.632 0 003.452 1.6M8.217 9.715L6 13.206 3.802 9.701"
    />,
    <path
      className="single-woman-process_svg__cls-1"
      d="M6 9a3.8 3.8 0 013.7 2.918l1.8 6.582H8.543l-1.054 5h-3l-1.054-5H.5l1.805-6.582A3.8 3.8 0 016 9z"
    />
  );

export default SvgSingleWomanProcess;
