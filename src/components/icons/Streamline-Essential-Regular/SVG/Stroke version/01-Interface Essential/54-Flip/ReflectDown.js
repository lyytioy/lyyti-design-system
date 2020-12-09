import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReflectDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".reflect-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="reflect-down_svg__a"
      d="M6.97 17.029l-4.94 4.939a.75.75 0 00.531 1.28h9.878a.75.75 0 00.531-1.28l-4.94-4.939a.749.749 0 00-1.06 0zM6.97 6.968L2.03 2.029A.751.751 0 012.561.748h9.878a.751.751 0 01.531 1.281L8.03 6.968a.749.749 0 01-1.06 0zM.75 11.998h13.5M22.5 20.998l-5.257-.697.697-5.257"
    />,
    <path
      className="reflect-down_svg__a"
      d="M17.25 4.65a7.5 7.5 0 016 7.348 9.032 9.032 0 01-6.007 8.3"
    />
  );

export default SvgReflectDown;
