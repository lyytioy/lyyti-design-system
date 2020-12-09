import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-search_svg__a"
      d="M8.223 19.9L3.75 23.25v-4.5h-1.5a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v7.5"
    />,
    <circle
      className="messages-bubble-square-search_svg__a"
      cx={15.749}
      cy={15.75}
      r={5.25}
    />,
    <path
      className="messages-bubble-square-search_svg__a"
      d="M23.249 23.25l-3.788-3.788"
    />
  );

export default SvgMessagesBubbleSquareSearch;
