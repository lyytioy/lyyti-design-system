import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorCodeSend = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-code-send_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-code-send_svg__a"
      d="M3.822 8.25v-6A1.65 1.65 0 015.589.75h15.9a1.65 1.65 0 011.766 1.5v10.5a1.65 1.65 0 01-1.766 1.5H17.25M3.822 5.25H23.25"
    />,
    <path
      className="monitor-code-send_svg__a"
      d="M.75 22.05a1.32 1.32 0 001.413 1.2h10.674a1.32 1.32 0 001.413-1.2v-9.6a1.32 1.32 0 00-1.413-1.2H2.163a1.32 1.32 0 00-1.413 1.2z"
    />,
    <path
      className="monitor-code-send_svg__a"
      d="M6.048 15l3.533 2.325-3.533 2.325M18.8 23.25c1.137 0 1.8-1.256 1.8-2.25v-3.75"
    />,
    <path
      className="monitor-code-send_svg__a"
      d="M23.25 19.65l-2.717-2.4-2.718 2.4"
    />
  );

export default SvgMonitorCodeSend;
