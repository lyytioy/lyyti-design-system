import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopSmiley = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-smiley_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-smiley_svg__a"
      d="M9.5 7.5v2M14.5 7.5v2M16 12a6.083 6.083 0 01-8 0M23.5 19.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-2h9v1h5v-1h9z"
    />,
    <path
      className="laptop-smiley_svg__a"
      d="M1.5 17.5v-12a2 2 0 012-2h17a2 2 0 012 2v12"
    />,
    <path className="laptop-smiley_svg__a" d="M3.5 5.5h17v10h-17z" />
  );

export default SvgLaptopSmiley;
