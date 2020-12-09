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
    <circle
      className="single-neutral-actions-wifi_svg__cls-1"
      cx={17.5}
      cy={22.25}
      r={1.25}
    />,
    <path
      className="single-neutral-actions-wifi_svg__cls-1"
      d="M23.5 15.623a9.539 9.539 0 00-12 0M14 18.738a5.566 5.566 0 017 0"
    />,
    <circle
      className="single-neutral-actions-wifi_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />,
    <path
      className="single-neutral-actions-wifi_svg__cls-1"
      d="M9.5 17.5h-9a7 7 0 0110.783-5.89"
    />
  );

export default SvgSingleNeutralActionsWifi;
