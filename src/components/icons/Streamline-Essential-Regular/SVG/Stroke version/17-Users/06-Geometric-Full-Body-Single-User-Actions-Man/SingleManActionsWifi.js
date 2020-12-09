import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsWifi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-wifi_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-wifi_svg__cls-1"
      d="M17.25 22.424a.375.375 0 11-.375.375.375.375 0 01.375-.375M23.25 15.622a9.542 9.542 0 00-12 0M13.749 19.238a5.567 5.567 0 017 0"
    />,
    <circle
      className="single-man-actions-wifi_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-actions-wifi_svg__cls-1"
      d="M10.555 10.888A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h4.5l.323-3.233M6 8.25v6"
    />
  );

export default SvgSingleManActionsWifi;
