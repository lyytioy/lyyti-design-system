import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-heart_svg__a"
      d="M21.75 9.753v-7.5a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h7.5M.75 5.253h21"
    />,
    <path
      className="app-window-heart_svg__a"
      d="M17.26 23.253l-5.114-5.334a3.025 3.025 0 01-.566-3.493 3.025 3.025 0 014.845-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.027 3.027 0 01-.567 3.493z"
    />
  );

export default SvgAppWindowHeart;
