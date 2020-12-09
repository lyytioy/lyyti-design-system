import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReflectUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".reflect-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="reflect-up_svg__a"
      d="M17.03 6.968l4.94-4.939a.751.751 0 00-.531-1.281h-9.878a.751.751 0 00-.531 1.281l4.94 4.939a.749.749 0 001.06 0zM17.03 17.029l4.94 4.939a.75.75 0 01-.531 1.28h-9.878a.75.75 0 01-.531-1.28l4.94-4.939a.749.749 0 011.06 0zM23.25 11.998H9.75M1.5 2.998l5.257.698-.697 5.257"
    />,
    <path
      className="reflect-up_svg__a"
      d="M6.75 19.347A7.5 7.5 0 01.75 12a9.031 9.031 0 016.007-8.3"
    />
  );

export default SvgReflectUp;
