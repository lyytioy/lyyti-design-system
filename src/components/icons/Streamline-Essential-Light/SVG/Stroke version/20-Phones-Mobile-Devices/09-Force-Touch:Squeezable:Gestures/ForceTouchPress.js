import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgForceTouchPress = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".force-touch-press_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="force-touch-press_svg__a"
      d="M9.5 19.5v4M7.5 21.5l2 2 2-2M6 13.5l-1-1M13 13.5l1-1M5.5 15.5H4M15 15.5h-1.5M16.229.5a10 10 0 00-4.145 4.356L8.928 11.3c-.282.577-.266 1.063.168 1.4a1 1 0 001.4-.167L14.373 6.7a1.421 1.421 0 012.55 1.18l-.39 1.349a1.146 1.146 0 002.161.677l.974-2.811a5.606 5.606 0 013.832-3.58M18.5 17.5v3.012M5.5 20.512h-3a2.006 2.006 0 01-2-2 1 1 0 011-1h21a1 1 0 011 1 2.006 2.006 0 01-2 2h-8"
    />
  );

export default SvgForceTouchPress;
