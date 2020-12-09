import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLogout2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".logout-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="logout-2_svg__a"
      d="M20.249 18.754v1.5a1.5 1.5 0 01-1.5 1.5h-4.5M14.249 3.754h4.5a1.5 1.5 0 011.5 1.5v1.5M10.393 23.246l-9-1.286a.75.75 0 01-.644-.742V3.725a.75.75 0 01.593-.734l9-2.221a.75.75 0 01.907.734v21a.75.75 0 01-.856.742zM20.249 9.753l3 3h-8.25M20.25 15.753l3-3"
    />,
    <path
      className="logout-2_svg__a"
      d="M7.874 11.629a.375.375 0 10.375.371.374.374 0 00-.375-.375"
    />
  );

export default SvgLogout2;
