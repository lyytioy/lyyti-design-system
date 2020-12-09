import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneMonitorExchange = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-monitor-exchange_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="phone-monitor-exchange_svg__a"
      x={0.75}
      y={0.75}
      width={12}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="phone-monitor-exchange_svg__a"
      d="M6.75 8.25v3M4.5 11.25H9"
    />,
    <rect
      className="phone-monitor-exchange_svg__a"
      x={15.75}
      y={11.25}
      width={7.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="phone-monitor-exchange_svg__a"
      d="M15.75 20.25h7.5M3.75 15.75a6 6 0 006 6H12M23.25 8.25a6 6 0 00-6-6h-1.5"
    />,
    <path
      className="phone-monitor-exchange_svg__a"
      d="M17.25.75l-1.5 1.5 1.5 1.5M10.5 23.25l1.5-1.5-1.5-1.5"
    />
  );

export default SvgPhoneMonitorExchange;
