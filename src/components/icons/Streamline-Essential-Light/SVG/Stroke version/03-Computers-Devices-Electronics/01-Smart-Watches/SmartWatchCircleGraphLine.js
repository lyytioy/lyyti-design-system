import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleGraphLine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-graph-line_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-graph-line_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-graph-line_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <path
      className="smart-watch-circle-graph-line_svg__a"
      d="M3.5 12.5h3l2.488-4.277a.5.5 0 01.876.08l2.211 6.397a.5.5 0 00.907.027l1.611-3.909a.5.5 0 01.876-.034L16.5 12.5h4"
    />
  );

export default SvgSmartWatchCircleGraphLine;
