import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptop2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-2_svg__a"
      d="M17.5 17.5H.5L3.331 4.29a1 1 0 01.977-.79h14.955a1 1 0 01.978 1.21zM.5 17.5h23v1a2 2 0 01-2 2h-19a2 2 0 01-2-2v-1z"
    />,
    <circle className="laptop-2_svg__a" cx={10} cy={10} r={2.5} />
  );

export default SvgLaptop2;
