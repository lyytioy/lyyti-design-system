import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-circle_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-circle_svg__cls-1"
      cx={12}
      cy={9.75}
      r={5.25}
    />,
    <path
      className="single-woman-circle_svg__cls-1"
      d="M18.913 20.876a9.746 9.746 0 00-13.826 0"
    />,
    <circle
      className="single-woman-circle_svg__cls-1"
      cx={12}
      cy={12}
      r={11.25}
    />,
    <path
      className="single-woman-circle_svg__cls-1"
      d="M6.75 9.75A6.739 6.739 0 0012 7.5a6.737 6.737 0 005.25 2.25M6.75 9.75v1.3a7.687 7.687 0 01-1.118 4.25M17.25 9.75v1.3a7.687 7.687 0 001.118 4.25"
    />
  );

export default SvgSingleWomanCircle;
