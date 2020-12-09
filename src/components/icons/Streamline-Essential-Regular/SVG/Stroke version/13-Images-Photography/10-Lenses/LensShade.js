import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLensShade = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lens-shade_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="lens-shade_svg__a"
      d="M17.52 8.25H6.48a1.5 1.5 0 01-1.471-1.206l-1.08-5.4a.751.751 0 01.736-.9h14.67a.751.751 0 01.736.9l-1.08 5.4A1.5 1.5 0 0117.52 8.25z"
    />,
    <path
      className="lens-shade_svg__a"
      d="M16.5 20.25h-9a.75.75 0 01-.75-.75V8.25h10.5V19.5a.75.75 0 01-.75.75zM15.75 20.25h-7.5v1.5a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5zM6.75 11.25h10.5M9.75 14.25v3M14.25 14.25v3"
    />
  );

export default SvgLensShade;
