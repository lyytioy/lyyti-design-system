import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-graph_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-graph_svg__a"
      d="M6.722 6v8h12M9.722 10.5V14M12.722 9v5M15.722 7v7"
    />,
    <path
      className="messages-bubble-graph_svg__a"
      d="M12.222 1C5.871 1 .722 5.253.722 10.5a8.738 8.738 0 003.4 6.741L1.722 23l6.372-3.641a13.608 13.608 0 004.128.641c6.352 0 11.5-4.253 11.5-9.5S18.574 1 12.222 1z"
    />
  );

export default SvgMessagesBubbleGraph;
