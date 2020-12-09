import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="flag_svg__a"
      d="M.75.75v22.5M.75 2.25h12a1.5 1.5 0 011.5 1.5v12H.75M9.75 20.25a4.5 4.5 0 014.5-4.5"
    />,
    <path
      className="flag_svg__a"
      d="M14.25 6.75h8.25A.75.75 0 0123.059 8l-4 4.505a1.5 1.5 0 000 1.994l4 4.5a.75.75 0 01-.56 1.248H9a1.5 1.5 0 01-1.5-1.5v-3"
    />
  );

export default SvgFlag;
