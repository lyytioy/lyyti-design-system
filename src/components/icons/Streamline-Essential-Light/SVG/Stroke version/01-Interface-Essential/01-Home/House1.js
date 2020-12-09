import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHouse1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".house-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="house-1_svg__a"
      d="M3.5 13.5v9a1 1 0 001 1H9a.5.5 0 00.5-.5v-4a2.5 2.5 0 015 0v4a.5.5 0 00.5.5h4.5a1 1 0 001-1V14M.5 13L12 1.5 23.5 13"
    />
  );

export default SvgHouse1;
