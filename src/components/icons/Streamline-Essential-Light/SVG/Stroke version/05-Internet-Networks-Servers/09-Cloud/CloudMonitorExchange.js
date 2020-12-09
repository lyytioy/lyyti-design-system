import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudMonitorExchange = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-monitor-exchange_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-monitor-exchange_svg__a"
      d="M5.5 23.5h6M8.5 21.5v1.978M.5 19.5h16M8.5 10.5V8.25a3.749 3.749 0 013.75-3.75H14"
    />,
    <path
      className="cloud-monitor-exchange_svg__a"
      d="M10.5 8.5l-2 2-2-2M13.5 10.5H15a1.5 1.5 0 011.5 1.5v8a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 20v-8A1.5 1.5 0 012 10.5h1.5M12.5 3L14 4.5 12.5 6"
    />,
    <path
      className="cloud-monitor-exchange_svg__a"
      d="M12 8.5h8.761S23.5 8.164 23.5 5.643a2.957 2.957 0 00-3.153-2.852A4.282 4.282 0 0016.5.5a4.413 4.413 0 00-2.378.682"
    />
  );

export default SvgCloudMonitorExchange;
