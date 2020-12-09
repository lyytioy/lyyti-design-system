import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-graph_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-graph_svg__a"
      d="M2.26 21.753a1.5 1.5 0 01-1.5-1.5V3.869a1.62 1.62 0 011.615-1.616h19.278a1.612 1.612 0 011.607 1.608v16.277a1.619 1.619 0 01-1.615 1.615zM23.26 6.753H.76M17.26 2.253v4.5M12.76 2.253v4.5"
    />,
    <path
      className="app-window-graph_svg__a"
      d="M.76 15.753h5.823a1.5 1.5 0 001.342-.829L9.7 11.373a.75.75 0 011.383.1l1.855 5.565a.75.75 0 001.382.1l1.78-3.555a1.5 1.5 0 011.341-.83h5.819"
    />
  );

export default SvgAppWindowGraph;
