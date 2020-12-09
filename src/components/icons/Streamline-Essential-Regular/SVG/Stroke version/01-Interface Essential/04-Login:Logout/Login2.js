import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLogin2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".login-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="login-2_svg__a"
      d="M9.1 11.629a.375.375 0 10.378.371.374.374 0 00-.375-.375M15.75 3h4.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5h-4.5"
    />,
    <path
      className="login-2_svg__a"
      d="M11.894 23.246l-9-1.286a.749.749 0 01-.644-.742V3.725a.75.75 0 01.593-.734l9-2.221a.75.75 0 01.907.734v21a.75.75 0 01-.856.742z"
    />
  );

export default SvgLogin2;
