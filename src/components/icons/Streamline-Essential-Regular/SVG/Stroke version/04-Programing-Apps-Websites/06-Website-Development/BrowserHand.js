import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="browser-hand_svg__a"
      d="M.75 14.25v9M.75 21.75h15a3 3 0 00-3-3H9a3 3 0 00-3-3H.75M6 18.75h3M3.75 11.253v-9A1.5 1.5 0 015.25.75h16.5a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5h-9M3.75 5.25h19.5"
    />
  );

export default SvgBrowserHand;
