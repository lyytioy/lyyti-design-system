import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsWifi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-wifi_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-wifi_svg__cls-1"
      d="M10.781 10.513A6.048 6.048 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-wifi_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-wifi_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-wifi_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.284-.71M17.25 22.424a.375.375 0 11-.375.375.375.375 0 01.375-.375M23.25 15.622a9.542 9.542 0 00-12 0M13.749 19.238a5.567 5.567 0 017 0"
    />
  );

export default SvgMultipleActionsWifi;
