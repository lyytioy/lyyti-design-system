import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-woman_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-woman_svg__cls-1"
      d="M.75 20.25a6.75 6.75 0 0113.5 0M3.388 8.2l-.012.778a5.9 5.9 0 01-.859 3.272M11.612 8.2l.011.778a5.9 5.9 0 00.86 3.272"
    />,
    <path
      className="multiple-woman_svg__cls-1"
      d="M3.388 8.2A5.483 5.483 0 007.5 6.305a5.483 5.483 0 004.112 1.9"
    />,
    <circle
      className="multiple-woman_svg__cls-1"
      cx={7.5}
      cy={7.875}
      r={4.125}
    />,
    <path
      className="multiple-woman_svg__cls-1"
      d="M15 13.667a6.757 6.757 0 018.25 6.583M14.251 4.416a4.125 4.125 0 11.756 7.305"
    />,
    <path
      className="multiple-woman_svg__cls-1"
      d="M20.612 8.2l.011.778a5.9 5.9 0 00.86 3.272"
    />,
    <path
      className="multiple-woman_svg__cls-1"
      d="M14.247 7.867A5.56 5.56 0 0016.5 6.305a5.483 5.483 0 004.112 1.9"
    />
  );

export default SvgMultipleWoman;
