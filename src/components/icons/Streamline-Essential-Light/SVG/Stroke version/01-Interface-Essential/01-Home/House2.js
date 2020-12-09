import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHouse2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".house-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="house-2_svg__a"
      d="M3.5 10v12.5a1 1 0 001 1h15a1 1 0 001-1V10"
    />,
    <path
      className="house-2_svg__a"
      d="M.5 13L12 1.5 23.5 13M10 15.5h4a1 1 0 011 1v7H9v-7a1 1 0 011-1z"
    />
  );

export default SvgHouse2;
