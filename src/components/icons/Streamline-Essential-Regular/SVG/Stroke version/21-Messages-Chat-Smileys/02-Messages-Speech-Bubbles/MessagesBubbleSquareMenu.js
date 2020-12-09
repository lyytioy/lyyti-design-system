import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareMenu = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-menu_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-menu_svg__a"
      d="M21.75 18.75h-10.5l-6 4.5v-4.5h-3a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5zM9.75 7.875h9M9.75 12.375h9M5.25 7.5"
    />,
    <path
      className="messages-bubble-square-menu_svg__a"
      d="M5.25 7.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.25 12a.375.375 0 10.375.375A.375.375 0 005.25 12"
    />
  );

export default SvgMessagesBubbleSquareMenu;
