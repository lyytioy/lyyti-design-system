import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerRam = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-ram_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="computer-ram_svg__a"
      d="M22.78 8.028L8.028 22.78a1.6 1.6 0 01-2.269 0L1.22 18.241a1.6 1.6 0 010-2.269L7.461 9.73l.477.1a1.605 1.605 0 001.888-1.892l-.1-.477 6.246-6.241a1.6 1.6 0 012.269 0l4.539 4.539a1.6 1.6 0 010 2.269z"
    />,
    <path
      className="computer-ram_svg__a"
      d="M5.759 18.241l1.135 1.135 2.269-2.27-1.135-1.134M15.972 8.028l1.134 1.135 2.27-2.269-1.135-1.135M10.298 13.702l1.135 1.135 3.404-3.404-1.135-1.135M2.355 14.837l1.134 1.135M4.624 12.567l1.135 1.135M12.567 4.624l1.135 1.135M14.837 2.355l1.135 1.134"
    />
  );

export default SvgComputerRam;
