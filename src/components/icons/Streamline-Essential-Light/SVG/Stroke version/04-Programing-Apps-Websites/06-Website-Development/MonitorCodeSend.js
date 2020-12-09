import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorCodeSend = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-code-send_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-code-send_svg__a"
      d="M3.5 5h20M6.5 2.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M8.5 2.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M10.5 2.75a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="monitor-code-send_svg__a"
      d="M3.5 10V3a2 2 0 012-2h16a2 2 0 012 2v11a2 2 0 01-2 2h-8"
    />,
    <rect
      className="monitor-code-send_svg__a"
      x={0.5}
      y={13}
      width={10}
      height={10}
      rx={1}
      ry={1}
    />,
    <path
      className="monitor-code-send_svg__a"
      d="M4.5 15L7 17.5 4.5 20M13 23h3.187c.829 0 1.313-1.047 1.313-1.875V18"
    />,
    <path className="monitor-code-send_svg__a" d="M19.5 20l-2-2-2 2" />
  );

export default SvgMonitorCodeSend;
