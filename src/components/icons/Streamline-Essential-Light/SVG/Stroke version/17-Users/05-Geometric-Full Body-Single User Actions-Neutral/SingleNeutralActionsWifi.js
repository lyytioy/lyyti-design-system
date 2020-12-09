import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsWifi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-wifi_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-wifi_svg__cls-1"
      d="M10.232 12.382A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6 2 .026"
    />,
    <circle
      className="single-neutral-actions-wifi_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <circle
      className="single-neutral-actions-wifi_svg__cls-1"
      cx={17.5}
      cy={22.25}
      r={1.25}
    />,
    <path
      className="single-neutral-actions-wifi_svg__cls-1"
      d="M23.5 15.623a9.539 9.539 0 00-12 0M14 18.738a5.566 5.566 0 017 0"
    />
  );

export default SvgSingleNeutralActionsWifi;
