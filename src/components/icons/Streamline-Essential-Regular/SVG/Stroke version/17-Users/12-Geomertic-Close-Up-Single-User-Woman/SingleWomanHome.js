import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-home_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-home_svg__cls-1"
      d="M23.25 23.25V12L12 .75.75 12v11.25M18.365 23.25a6.751 6.751 0 00-12.73 0"
    />,
    <path
      className="single-woman-home_svg__cls-1"
      d="M7.888 13.455l-.012.777a5.91 5.91 0 01-.859 3.273M16.112 13.455l.012.777a5.91 5.91 0 00.859 3.273M7.888 13.455a5.484 5.484 0 004.112-1.9 5.484 5.484 0 004.112 1.9"
    />,
    <circle
      className="single-woman-home_svg__cls-1"
      cx={12}
      cy={13.125}
      r={4.125}
    />
  );

export default SvgSingleWomanHome;
