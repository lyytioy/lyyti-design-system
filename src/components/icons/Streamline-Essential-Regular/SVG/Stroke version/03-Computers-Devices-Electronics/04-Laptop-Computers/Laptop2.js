import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptop2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-2_svg__a"
      d="M.75 16.5V18a3 3 0 003 3h16.5a3 3 0 003-3v-1.5zM18.169 3H7.412a3 3 0 00-2.846 2.051L.75 16.5h15l3.842-11.526A1.5 1.5 0 0018.169 3z"
    />,
    <circle className="laptop-2_svg__a" cx={9.508} cy={9.75} r={1.5} />
  );

export default SvgLaptop2;
