import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-key_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-key_svg__cls-1"
      d="M16.405 20.231a1.25 1.25 0 110-1.768 1.251 1.251 0 010 1.768z"
    />,
    <path
      className="single-man-actions-key_svg__cls-1"
      d="M19.048 17.942l4.305-4.295a.5.5 0 00.147-.354V12a.5.5 0 00-.5-.5h-1.3a.5.5 0 00-.344.137l-4.429 4.184a4 4 0 102.122 2.121zM10 16.5H.5c.423-2.286.353-3.58 1.609-4.118L6.5 10.5v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v2l4.391 1.882a1.782 1.782 0 011.018 1.1"
    />
  );

export default SvgSingleManActionsKey;
