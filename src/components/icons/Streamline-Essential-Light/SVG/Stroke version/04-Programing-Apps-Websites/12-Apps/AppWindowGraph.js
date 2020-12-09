import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-graph_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="app-window-graph_svg__a" d="M.5 7.004h23" />,
    <rect
      className="app-window-graph_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-graph_svg__a"
      d="M.5 7.004h23M4 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M.5 15h4.732a.5.5 0 00.416-.223L6.972 12.8a.5.5 0 01.881.091l1.294 3.235a.5.5 0 00.88.092l2.961-4.441a.5.5 0 01.875.08l2.273 5.3a.5.5 0 00.876.081l1.339-2.01a.5.5 0 01.416-.228H23.5"
    />
  );

export default SvgAppWindowGraph;
