import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorExchangeArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-exchange-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-exchange-arrow_svg__a"
      d="M23.5 7v.979A1.517 1.517 0 0122 9.5h-9a1.518 1.518 0 01-1.5-1.521V2A1.5 1.5 0 0113 .5h9A1.5 1.5 0 0123.5 2zM23.5 6.5h-12M20 11.5h-5M17.5 9.5v2M12.5 19v.979A1.517 1.517 0 0111 21.5H2a1.518 1.518 0 01-1.5-1.521V14A1.5 1.5 0 012 12.5h9a1.5 1.5 0 011.5 1.5zM12.5 18.5H.5M9 23.5H4M6.5 21.5v2M2.5 8.5V5.75A3.749 3.749 0 016.25 2H8"
    />,
    <path
      className="monitor-exchange-arrow_svg__a"
      d="M4.5 6.5l-2 2-2-2M6.5.5L8 2 6.5 3.5"
    />
  );

export default SvgMonitorExchangeArrow;
