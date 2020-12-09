import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPieLineGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pie-line-graph_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="pie-line-graph_svg__a" cx={17} cy={7} r={3.5} />,
    <path
      className="pie-line-graph_svg__a"
      d="M3.5 20.5l2.2-3.083a.5.5 0 01.706-.11L7.6 18.2a.5.5 0 00.7-.1l2.7-3.6M17.751 3.581L17 7l3.474-.425"
    />,
    <rect
      className="pie-line-graph_svg__a"
      x={14.5}
      y={13.5}
      width={6}
      height={7}
      rx={0.5}
      ry={0.5}
    />,
    <path className="pie-line-graph_svg__a" d="M16.5 16.5h2M16.5 18.5h1" />,
    <rect
      className="pie-line-graph_svg__a"
      x={3.5}
      y={3.5}
      width={6}
      height={7}
      rx={0.5}
      ry={0.5}
    />,
    <path className="pie-line-graph_svg__a" d="M5.5 5.5h2M5.5 7.5h1" />,
    <rect
      className="pie-line-graph_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />
  );

export default SvgPieLineGraph;
