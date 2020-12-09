import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorType = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-type_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-type_svg__a"
      d="M23.251 20.247a3 3 0 01-3 3M20.251 3.747a3 3 0 013 3M6.751 23.247a3 3 0 01-3-3M3.751 12.747v3M23.251 11.247v4.5M15.751 23.247h-4.5M15.751 3.747h-3M.751.747l3.182 8.486L5.524 5.52l3.713-1.591L.751.747zM17.251 8.247A3.285 3.285 0 0119.5 7.5M17.251 8.247A3.285 3.285 0 0015 7.5M17.251 19.5a3.285 3.285 0 002.25.75M17.251 19.5a3.285 3.285 0 01-2.25.75M17.251 19.497V8.247"
    />
  );

export default SvgCursorType;
