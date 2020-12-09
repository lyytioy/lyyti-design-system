import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-flash_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions-flash_svg__cls-1"
      d="M3.376 4.986v1a5.912 5.912 0 01-.859 3.272M11.623 4.986v1a5.9 5.9 0 00.86 3.272M3.387 5.2A5.485 5.485 0 007.5 3.305a5.481 5.481 0 004.112 1.9"
    />,
    <circle
      className="single-woman-actions-flash_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-woman-actions-flash_svg__cls-1"
      d="M.75 17.25a6.75 6.75 0 0111.957-4.295M20.25 9.75l-5.911 6.882a.375.375 0 00.286.618h2.625v6l5.91-6.882a.375.375 0 00-.285-.618H20.25z"
    />
  );

export default SvgSingleWomanActionsFlash;
