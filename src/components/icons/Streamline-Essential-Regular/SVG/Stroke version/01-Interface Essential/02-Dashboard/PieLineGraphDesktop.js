import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPieLineGraphDesktop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pie-line-graph-desktop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="pie-line-graph-desktop_svg__a"
      d="M14.998 23.253h-6l.75-4.5h4.5l.75 4.5zM6.748 23.253h10.5"
    />,
    <rect
      className="pie-line-graph-desktop_svg__a"
      x={0.748}
      y={0.753}
      width={22.5}
      height={18}
      rx={3}
      ry={3}
    />,
    <path
      className="pie-line-graph-desktop_svg__a"
      d="M.748 11.253l3.97-3.969a.75.75 0 011.061 0l1.939 1.939a.75.75 0 001.061 0l3.969-3.97M.748 15.753h22.5M14.248 9.753v2.25M20.248 9.753v2.25M17.248 7.503v4.5"
    />
  );

export default SvgPieLineGraphDesktop;
