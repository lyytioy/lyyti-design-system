import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyCryingRainbow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-crying-rainbow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-crying-rainbow_svg__a"
      d="M21.8 18A11.5 11.5 0 10.5 12a11.429 11.429 0 001.7 6M18.8 10.108a2.359 2.359 0 00-4 0M9.5 10.108a2.359 2.359 0 00-4 0"
    />,
    <path
      className="smiley-crying-rainbow_svg__a"
      d="M12 14.5a1.5 1.5 0 00-1.5 1.5v2a1.5 1.5 0 003 0v-2a1.5 1.5 0 00-1.5-1.5zM4.5 12.5v7.006M7.5 12.5v7.006M9 23.5a1.5 1.5 0 10-.656-2.843 2.486 2.486 0 00-4.688 0A1.5 1.5 0 103 23.5zM19.5 12.5v7.006M16.5 12.5v7.006M15 23.5a1.5 1.5 0 11.656-2.843 2.486 2.486 0 014.688 0A1.5 1.5 0 1121 23.5z"
    />
  );

export default SvgSmileyCryingRainbow;
