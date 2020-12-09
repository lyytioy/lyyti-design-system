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
      d="M23.5 15.623a9.539 9.539 0 00-12 0M14 18.738a5.566 5.566 0 017 0M9.5 16.5h-9c.423-2.286.353-3.58 1.609-4.118L6.5 10.5v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v2l3.492 1.5"
    />
  );

export default SvgSingleManActionsWifi;
