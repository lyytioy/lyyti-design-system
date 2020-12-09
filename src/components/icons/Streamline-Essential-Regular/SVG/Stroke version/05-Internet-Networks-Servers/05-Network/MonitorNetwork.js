import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorNetwork = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-network_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="monitor-network_svg__a"
      x={0.75}
      y={13.5}
      width={9.75}
      height={6.75}
      rx={1.5}
      ry={1.5}
    />,
    <path className="monitor-network_svg__a" d="M3 23.25h5.25M5.625 20.25v3" />,
    <rect
      className="monitor-network_svg__a"
      x={13.5}
      y={13.5}
      width={9.75}
      height={6.75}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor-network_svg__a"
      d="M15.75 23.25H21M18.375 20.25v3"
    />,
    <rect
      className="monitor-network_svg__a"
      x={7.125}
      y={0.75}
      width={9.75}
      height={6.75}
      rx={1.5}
      ry={1.5}
    />,
    <path className="monitor-network_svg__a" d="M9.375 10.5h5.25M12 7.5v3" />
  );

export default SvgMonitorNetwork;
