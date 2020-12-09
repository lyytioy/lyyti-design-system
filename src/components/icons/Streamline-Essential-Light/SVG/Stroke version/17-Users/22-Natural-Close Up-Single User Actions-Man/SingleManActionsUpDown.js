import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsUpDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-up-down_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-up-down_svg__cls-1"
      d="M11.5 20.5l3 3 3-3M14.5 23.5v-9M17.5 17.5l3-3 3 3M20.5 14.5v9M11.5 16.5H.5c.423-2.286.353-3.58 1.609-4.118L6.5 10.5v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v2l4.391 1.882"
    />
  );

export default SvgSingleManActionsUpDown;
