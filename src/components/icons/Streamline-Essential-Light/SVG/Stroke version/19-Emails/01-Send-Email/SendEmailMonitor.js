import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSendEmailMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".send-email-monitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="send-email-monitor_svg__a"
      d="M13.077 22.5H7.353l.24-.386A7.233 7.233 0 008.784 18.5h2.862a7.233 7.233 0 001.191 3.614zM5.615 22.5h9.2M.615 15.5h20"
    />,
    <path
      className="send-email-monitor_svg__a"
      d="M20.615 12.5v5a1 1 0 01-1 1h-18a1 1 0 01-1-1v-15a1 1 0 011-1h18a1 1 0 011 1"
    />,
    <path
      className="send-email-monitor_svg__a"
      d="M22.219 10.059a.553.553 0 01-.542.441h-8.008a.553.553 0 01-.542-.667l1.154-4.892a.553.553 0 01.542-.441h8.008a.553.553 0 01.542.667z"
    />,
    <path
      className="send-email-monitor_svg__a"
      d="M14.482 4.618l2.834 3.052a1.108 1.108 0 001.448.154l4.484-3.139M7.615 4.5h4M7.615 7.5h3M7.615 10.5h2"
    />
  );

export default SvgSendEmailMonitor;
