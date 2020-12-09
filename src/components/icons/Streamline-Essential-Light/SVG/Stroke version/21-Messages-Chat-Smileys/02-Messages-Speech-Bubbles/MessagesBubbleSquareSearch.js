import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-search_svg__a"
      d="M23.5 23.5l-3.578-3.578"
    />,
    <circle
      className="messages-bubble-square-search_svg__a"
      cx={17}
      cy={16.5}
      r={4.5}
    />,
    <path
      className="messages-bubble-square-search_svg__a"
      d="M9.5 14.5h-1l-4 4v-4h-3a1 1 0 01-1-1v-12a1 1 0 011-1h19a1 1 0 011 1v8"
    />
  );

export default SvgMessagesBubbleSquareSearch;
