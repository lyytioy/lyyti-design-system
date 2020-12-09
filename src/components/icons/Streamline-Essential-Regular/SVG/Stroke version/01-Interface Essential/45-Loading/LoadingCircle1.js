import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingCircle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="loading-circle-1_svg__a"
      d="M12 4.447a7.5 7.5 0 11-7.5 7.5M22.942 14.523a11.42 11.42 0 01-1.087 2.848M19.814 20.031a12.161 12.161 0 01-2.455 1.81M12.993.747a11.137 11.137 0 012.971.682M18.888 3.065a10.807 10.807 0 012.131 2.178M22.6 8.2a10.5 10.5 0 01.614 2.984M14.25 22.972A11.252 11.252 0 019.75.922"
    />
  );

export default SvgLoadingCircle1;
