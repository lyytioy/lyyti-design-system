import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-graph_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-graph_svg__a"
      d="M23.5 17.5a1 1 0 01-1 1h-11l-4 4v-4h-6a1 1 0 01-1-1v-15a1 1 0 011-1h21a1 1 0 011 1z"
    />,
    <path
      className="messages-bubble-square-graph_svg__a"
      d="M6.506 5.5v8h12M9.506 10v3.5M12.506 8.5v5M15.506 6.5v7"
    />
  );

export default SvgMessagesBubbleSquareGraph;
