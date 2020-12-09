import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHouse4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".house-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="house-4_svg__a"
      d="M1.5 9l9.871-7.991a1 1 0 011.258 0L22.5 9"
    />,
    <path
      className="house-4_svg__a"
      d="M11.363 5.026l-8.478 7a1.211 1.211 0 00-.385.819V22.5a1 1 0 001 1h6V16a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v7.5h6a1 1 0 001-1v-9.652a1.211 1.211 0 00-.385-.819l-8.478-7a1 1 0 00-1.274-.003z"
    />
  );

export default SvgHouse4;
