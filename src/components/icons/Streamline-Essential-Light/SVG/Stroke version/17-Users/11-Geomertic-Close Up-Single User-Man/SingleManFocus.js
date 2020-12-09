import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManFocus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-focus_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-focus_svg__cls-1"
      d="M7.5 23.5h-6a1 1 0 01-1-1v-6M7.5.5h-6a1 1 0 00-1 1v6M16.5 23.5h6a1 1 0 001-1v-6M16.5.5h6a1 1 0 011 1v6"
    />,
    <g id="single-man-focus_svg___Group_" data-name="&lt;Group&gt;">
      <g id="single-man-focus_svg__New_Symbol_15" data-name="New Symbol 15">
        <path
          className="single-man-focus_svg__cls-1"
          d="M17.5 18.5a5.5 5.5 0 10-11 0zM9.144 6.6a5.4 5.4 0 006.021 1.21"
        />
        <circle
          className="single-man-focus_svg__cls-1"
          cx={11.944}
          cy={8.25}
          r={3.25}
        />
      </g>
    </g>
  );

export default SvgSingleManFocus;
