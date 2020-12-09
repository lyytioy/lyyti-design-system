import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-graph_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-graph_svg__a"
      d="M21.75 18.75h-10.5l-6 4.5v-4.5h-3a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5z"
    />,
    <path
      className="messages-bubble-square-graph_svg__a"
      d="M18.75 14.25H5.25v-9"
    />,
    <path
      className="messages-bubble-square-graph_svg__a"
      d="M8.25 9.75h4.5v4.5h-4.5zM12.75 5.25h4.5v9h-4.5z"
    />
  );

export default SvgMessagesBubbleSquareGraph;
