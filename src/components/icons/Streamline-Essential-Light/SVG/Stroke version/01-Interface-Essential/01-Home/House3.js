import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHouse3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".house-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="house-3_svg__a"
      d="M3.5 10v12.5a1 1 0 001 1h15a1 1 0 001-1V10"
    />,
    <path
      className="house-3_svg__a"
      d="M.5 13L12 1.5 23.5 13M10 15.5h4a1 1 0 011 1v7H9v-7a1 1 0 011-1z"
    />,
    <circle className="house-3_svg__a" cx={12} cy={9.5} r={2} />
  );

export default SvgHouse3;
