import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-image_svg__a"
      d="M21.75 18.75h-10.5l-6 4.5v-4.5h-3a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5zM7.586 4.875a.375.375 0 00-.375-.375M7.211 4.5a.375.375 0 10.375.375"
    />,
    <path
      className="messages-bubble-square-image_svg__a"
      d="M18.75 12.75l-3.87-5.837a.749.749 0 00-1.238-.013l-2 2.851-1.232-.99a.751.751 0 00-1.093.17L6.771 12.75M5.25 12.75h13.5"
    />
  );

export default SvgMessagesBubbleSquareImage;
