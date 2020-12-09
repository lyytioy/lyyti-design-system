import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPieLineGraphDesktop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pie-line-graph-desktop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="pie-line-graph-desktop_svg__a"
      cx={7}
      cy={8.5}
      r={3.5}
    />,
    <path
      className="pie-line-graph-desktop_svg__a"
      d="M7 5v3.5h3.5M9 22.5a6.979 6.979 0 001.5-4M15 22.5a6.979 6.979 0 01-1.5-4M7.499 22.5h9M.5 15.5h23"
    />,
    <rect
      className="pie-line-graph-desktop_svg__a"
      x={0.5}
      y={1.5}
      width={23}
      height={17}
      rx={1}
      ry={1}
    />,
    <path
      className="pie-line-graph-desktop_svg__a"
      d="M13.5 7L15 5l3 2.5 2.5-3M19.5 12.5V11M17.5 12.5v-2M15.5 12.5v-3M13.5 12.5V11"
    />
  );

export default SvgPieLineGraphDesktop;
