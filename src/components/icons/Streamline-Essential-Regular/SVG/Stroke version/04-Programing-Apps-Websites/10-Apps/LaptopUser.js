import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-user_svg__a"
      d="M22.371 19.978a1.226 1.226 0 01-1.1 1.775H2.727a1.225 1.225 0 01-1.1-1.775L3 15.749h18z"
    />,
    <path
      className="laptop-user_svg__a"
      d="M6 3.753H4.506a1.5 1.5 0 00-1.5 1.5v10.5H21v-10.5a1.5 1.5 0 00-1.5-1.5H18M11.25 18.751h1.5"
    />,
    <circle className="laptop-user_svg__a" cx={12} cy={4.878} r={2.625} />,
    <path className="laptop-user_svg__a" d="M7.5 12.753a4.5 4.5 0 019 0z" />
  );

export default SvgLaptopUser;
