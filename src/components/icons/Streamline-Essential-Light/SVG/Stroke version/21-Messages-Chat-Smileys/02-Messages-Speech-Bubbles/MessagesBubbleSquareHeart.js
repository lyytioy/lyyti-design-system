import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-heart_svg__a"
      d="M23.543 17.491a1 1 0 01-1 1h-11l-4 4v-4h-6a1 1 0 01-1-1v-15a1 1 0 011-1h21a1 1 0 011 1z"
    />,
    <path
      className="messages-bubble-square-heart_svg__a"
      d="M12.043 13.991L7.9 9.673a2.449 2.449 0 01-.459-2.827 2.449 2.449 0 013.922-.636l.676.675.676-.675a2.45 2.45 0 013.923.636 2.45 2.45 0 01-.459 2.827z"
    />
  );

export default SvgMessagesBubbleSquareHeart;
