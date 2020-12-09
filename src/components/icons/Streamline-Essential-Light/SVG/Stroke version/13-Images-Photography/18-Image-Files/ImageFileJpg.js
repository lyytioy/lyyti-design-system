import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileJpg = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-jpg_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="image-file-jpg_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.475A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="image-file-jpg_svg__a"
      d="M16.5.58V4.5a1 1 0 001 1h3.92M8.5 12.5V17a1.5 1.5 0 01-3 0M13.5 14a1.5 1.5 0 01-1.5 1.5h-1.5v-3H12a1.5 1.5 0 011.5 1.5zM10.5 18.5v-3M18.5 14.5V14a1.5 1.5 0 00-3 0v3a1.5 1.5 0 003 0v-.5h-1"
    />
  );

export default SvgImageFileJpg;
