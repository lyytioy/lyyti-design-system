import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-circle_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-circle_svg__cls-1"
      cx={12}
      cy={12}
      r={11.5}
    />,
    <path
      className="single-woman-circle_svg__cls-1"
      d="M17.1 13.1a5.506 5.506 0 01-.8-3.054V8.8a4.3 4.3 0 10-8.6 0v1.249a5.506 5.506 0 01-.8 3.051"
    />,
    <path
      className="single-woman-circle_svg__cls-1"
      d="M7.7 9.5A5.687 5.687 0 0012 7.535 5.687 5.687 0 0016.3 9.5M15.787 9.482a3.791 3.791 0 01-7.574 0M18.056 18a6.989 6.989 0 00-12.112 0"
    />
  );

export default SvgSingleWomanCircle;
