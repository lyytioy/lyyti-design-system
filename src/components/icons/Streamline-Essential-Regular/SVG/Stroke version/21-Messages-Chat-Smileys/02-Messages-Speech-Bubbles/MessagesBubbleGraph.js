import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-graph_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-graph_svg__a"
      d="M6.75 15.75h12M8.25 11.25h4.5v4.5h-4.5zM12.75 6.75h4.5v9h-4.5z"
    />,
    <path
      className="messages-bubble-graph_svg__a"
      d="M12.75.75a10.485 10.485 0 00-8.917 16.025L.75 23.25l6.474-3.084A10.5 10.5 0 1012.75.75z"
    />
  );

export default SvgMessagesBubbleGraph;
