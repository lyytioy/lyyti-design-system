import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSendEmailMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".send-email-monitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="send-email-monitor_svg__a"
      d="M13.673 23.25H8.827l.808-4.5h3.231l.807 4.5zM6.404 23.25h9.692M.75 14.25h21M21.75 14.25v1.5a3 3 0 01-3 3h-15a3 3 0 01-3-3v-12a3 3 0 013-3h15a2.99 2.99 0 011.342.316"
    />,
    <path
      className="send-email-monitor_svg__a"
      d="M22.244 9.75a1.963 1.963 0 01-1.823 1.5h-7.5a1.061 1.061 0 01-1.027-1.5l1.418-4.5a2.16 2.16 0 011.866-1.5h6.965a1.137 1.137 0 011.07 1.5z"
    />,
    <path
      className="send-email-monitor_svg__a"
      d="M13.993 4.253l3.428 3.997 5.617-3.996M5.25 11.25h1.5M5.25 8.25h3M5.25 5.25h5.25"
    />
  );

export default SvgSendEmailMonitor;
