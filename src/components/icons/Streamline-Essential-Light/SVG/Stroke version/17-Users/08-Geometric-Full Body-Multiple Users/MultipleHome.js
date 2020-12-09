import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-home_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-home_svg__cls-1"
      d="M4 23.5H1.5a1 1 0 01-1-1V8.8a1 1 0 01.429-.821l10.5-7.3a1 1 0 011.142 0l10.5 7.3a1 1 0 01.429.821v13.7a1 1 0 01-1 1H20"
    />,
    <circle
      className="multiple-home_svg__cls-1"
      cx={16.5}
      cy={10.25}
      r={2.25}
    />,
    <path
      className="multiple-home_svg__cls-1"
      d="M16.5 13.5a3 3 0 00-3 3V19H15l.5 4.5h2L18 19h1.5v-2.5a3 3 0 00-3-3z"
    />,
    <g id="multiple-home_svg___Group_" data-name="&lt;Group&gt;">
      <circle
        className="multiple-home_svg__cls-1"
        cx={7.5}
        cy={10.25}
        r={2.25}
      />
      <path
        className="multiple-home_svg__cls-1"
        d="M7.5 13.5a3 3 0 00-3 3V19H6l.5 4.5h2L9 19h1.5v-2.5a3 3 0 00-3-3z"
      />
    </g>
  );

export default SvgMultipleHome;
