import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPencil = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pencil_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="pencil_svg__a"
      d="M17.672 2.086l4.242 4.243-15.05 15.05-4.242-4.243zM2.621 17.136L.5 23.5l6.364-2.121-4.243-4.243z"
    />,
    <path
      className="pencil_svg__a"
      d="M21.914 6.328l-4.242-4.242.707-.707a3 3 0 014.242 4.242z"
    />
  );

export default SvgPencil;
