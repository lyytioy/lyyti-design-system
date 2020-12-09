import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsWifi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-wifi_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-wifi_svg__cls-1"
      cx={17.5}
      cy={22}
      r={1.5}
    />,
    <path
      className="multiple-actions-wifi_svg__cls-1"
      d="M20.826 18.619a5.5 5.5 0 00-6.652 0M23.5 15.5a10 10 0 00-12 0M9.5 15.5h-9a6 6 0 0111.209-2.979"
    />,
    <circle
      className="multiple-actions-wifi_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-wifi_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-wifi_svg__cls-1"
      d="M19.47 10.605a6 6 0 00-6.482-.295"
    />
  );

export default SvgMultipleActionsWifi;
