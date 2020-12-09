import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPieLineGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pie-line-graph_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="pie-line-graph_svg__a"
      d="M8.246 19.5l3.97-3.97a.75.75 0 011.061 0l1.939 1.939a.75.75 0 001.061 0l3.969-3.969"
    />,
    <rect
      className="pie-line-graph_svg__a"
      x={0.746}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="pie-line-graph_svg__a" cx={8.246} cy={8.25} r={4.5} />,
    <path
      className="pie-line-graph_svg__a"
      d="M8.246 3.75v4.5l3.182 3.182M16.496 5.25h3M16.496 8.25h3"
    />
  );

export default SvgPieLineGraph;
