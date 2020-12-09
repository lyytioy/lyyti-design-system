import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-heart_svg__a"
      d="M21.75 18.75h-10.5l-6 4.5v-4.5h-3a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5z"
    />,
    <path
      className="messages-bubble-square-heart_svg__a"
      d="M12 13.875l-3.836-4a2.271 2.271 0 01-.425-2.619 2.269 2.269 0 013.634-.59l.627.625.626-.626a2.269 2.269 0 013.634.59 2.268 2.268 0 01-.425 2.619z"
    />
  );

export default SvgMessagesBubbleSquareHeart;
