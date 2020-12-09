import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgForceTouchTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".force-touch-tap_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="force-touch-tap_svg__a"
      d="M18.5 19v3M23.5 20a2.006 2.006 0 01-2 2h-19a2.006 2.006 0 01-2-2 1 1 0 011-1h21a1 1 0 011 1zM6 15l-1-1M13 15l1-1M5.5 17H4M15 17h-1.5M16.229 2a10 10 0 00-4.145 4.356L8.928 12.8c-.282.577-.266 1.063.168 1.4a1 1 0 001.4-.167L14.373 8.2a1.421 1.421 0 012.55 1.18l-.39 1.349a1.146 1.146 0 002.161.677l.974-2.811a5.606 5.606 0 013.832-3.58"
    />
  );

export default SvgForceTouchTap;
