import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorExchangeArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-exchange-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-exchange-arrow_svg__a"
      d="M8.25 3.75h-3a3 3 0 00-3 3v3"
    />,
    <path
      className="monitor-exchange-arrow_svg__a"
      d="M.75 8.25l1.5 1.5 1.5-1.5M6.75 5.25l1.5-1.5-1.5-1.5"
    />,
    <rect
      className="monitor-exchange-arrow_svg__a"
      x={0.75}
      y={12.75}
      width={12}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor-exchange-arrow_svg__a"
      d="M6.75 20.25v3M4.5 23.25H9"
    />,
    <rect
      className="monitor-exchange-arrow_svg__a"
      x={11.25}
      y={0.75}
      width={12}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor-exchange-arrow_svg__a"
      d="M17.25 8.25v3M15 11.25h4.5"
    />
  );

export default SvgMonitorExchangeArrow;
