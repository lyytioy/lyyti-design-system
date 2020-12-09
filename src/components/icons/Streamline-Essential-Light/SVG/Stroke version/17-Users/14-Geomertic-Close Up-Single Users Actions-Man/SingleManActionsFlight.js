import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsFlight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-flight_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-flight_svg__cls-1"
      d="M22.255 14.8a1.61 1.61 0 011.155 1.037 1.522 1.522 0 01.09.513 1.591 1.591 0 01-.743 1.378L13.6 23.415a.561.561 0 01-.621-.018L9.616 21.04a.31.31 0 01-.047-.437.29.29 0 01.053-.052l1.409-1.243a.31.31 0 01.3-.051l1.769 1.052 2.24-1.563-4.245-2.628a.385.385 0 01-.044-.544.378.378 0 01.062-.058l1.038-.769a.386.386 0 01.364-.052l5.85 2.178 2.706-1.847a1.5 1.5 0 011.184-.226zM8.5 17.5h-8A7 7 0 0112 12.138M3.838 2.592A7.053 7.053 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-flight_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsFlight;
