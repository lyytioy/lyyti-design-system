import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerMonitorExchange = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-monitor-exchange_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-monitor-exchange_svg__a"
      d="M12.751 9.75v-7.5a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-6M12.751 6.75h10.5"
    />,
    <path
      className="server-monitor-exchange_svg__a"
      d="M15.751 3.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M15.751 9.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M20.251 3.75h-1.5M20.251 9.75h-1.5"
    />,
    <rect
      className="server-monitor-exchange_svg__a"
      x={0.751}
      y={12.75}
      width={11.999}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="server-monitor-exchange_svg__a"
      d="M6.75 20.25v3M3.75 23.25h6M5.251 6.75L3 9V6.75a3 3 0 013-3h4.5M.751 6.75L3.001 9"
    />,
    <path
      className="server-monitor-exchange_svg__a"
      d="M8.251 1.5l2.25 2.25L8.251 6"
    />
  );

export default SvgServerMonitorExchange;
