import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-home_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="multiple-home_svg__cls-1" cx={7.5} cy={14.25} r={3} />,
    <path
      className="multiple-home_svg__cls-1"
      d="M11.25 23.25v-.75a3.75 3.75 0 00-7.5 0v.75"
    />,
    <circle className="multiple-home_svg__cls-1" cx={16.5} cy={14.25} r={3} />,
    <path
      className="multiple-home_svg__cls-1"
      d="M20.25 23.25v-.75a3.75 3.75 0 00-6.4-2.652"
    />,
    <path
      className="multiple-home_svg__cls-1"
      d="M23.25 23.25V12L12 .75.75 12v11.25"
    />
  );

export default SvgMultipleHome;
