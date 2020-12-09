import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsWifi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-wifi_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-actions-wifi_svg__cls-1"
      cx={17.5}
      cy={22.25}
      r={1.25}
    />,
    <path
      className="single-man-actions-wifi_svg__cls-1"
      d="M23.5 15.623a9.539 9.539 0 00-12 0M14 18.738a5.566 5.566 0 017 0M9.5 17.5h-9a7 7 0 0110.783-5.89M3.838 2.592A7.053 7.053 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-wifi_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsWifi;
