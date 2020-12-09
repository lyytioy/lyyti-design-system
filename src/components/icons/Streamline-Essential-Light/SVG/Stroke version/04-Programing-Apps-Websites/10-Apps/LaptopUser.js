import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-user_svg__a"
      d="M21.306 20.5H2.694a2 2 0 01-1.973-1.667L.5 17.5h23l-.221 1.329a2 2 0 01-1.973 1.671zM2.5 3.5h19a1 1 0 011 1v13h-21v-13a1 1 0 011-1z"
    />,
    <circle className="laptop-user_svg__a" cx={12} cy={7.754} r={2.25} />,
    <path className="laptop-user_svg__a" d="M16.5 14.5a4.644 4.644 0 00-9 0z" />
  );

export default SvgLaptopUser;
