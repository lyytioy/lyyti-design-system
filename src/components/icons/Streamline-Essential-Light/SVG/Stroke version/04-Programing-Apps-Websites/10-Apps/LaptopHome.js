import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-home_svg__a"
      d="M9 9.636V13.5a1 1 0 001 1h4a1 1 0 001-1V9.636"
    />,
    <path
      className="laptop-home_svg__a"
      d="M8 10.511l3.012-2.636a1.5 1.5 0 011.976 0L16 10.511M13 14.5h-2v-2a1 1 0 112 0zM21.306 20.5H2.694a2 2 0 01-1.973-1.667L.5 17.5h23l-.221 1.329a2 2 0 01-1.973 1.671z"
    />,
    <path
      className="laptop-home_svg__a"
      d="M2.5 3.5h19a1 1 0 011 1v13h-21v-13a1 1 0 011-1z"
    />
  );

export default SvgLaptopHome;
