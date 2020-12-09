import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-circle_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-circle_svg__cls-1"
      d="M17 19.7c3.848.325 6.5 1.01 6.5 1.8 0 1.1-5.148 2-11.5 2S.5 22.6.5 21.5c0-.79 2.635-1.473 6.458-1.8"
    />,
    <circle
      className="multiple-circle_svg__cls-1"
      cx={20.5}
      cy={4.75}
      r={2.25}
    />,
    <path
      className="multiple-circle_svg__cls-1"
      d="M20.5 8a3 3 0 00-3 3v2.5H19l.5 4.5h2l.5-4.5h1.5V11a3 3 0 00-3-3z"
    />,
    <circle
      className="multiple-circle_svg__cls-1"
      cx={3.5}
      cy={4.75}
      r={2.25}
    />,
    <path
      className="multiple-circle_svg__cls-1"
      d="M3.5 8a3 3 0 00-3 3v2.5H2l.5 4.5h2l.5-4.5h1.5V11a3 3 0 00-3-3z"
    />,
    <g id="multiple-circle_svg___Group_" data-name="&lt;Group&gt;">
      <circle
        className="multiple-circle_svg__cls-1"
        cx={12}
        cy={3.25}
        r={2.75}
      />
      <path
        className="multiple-circle_svg__cls-1"
        d="M15.5 10.5a3.5 3.5 0 00-7 0v3h1.583l.417 5h3l.417-5H15.5z"
      />
    </g>
  );

export default SvgMultipleCircle;
