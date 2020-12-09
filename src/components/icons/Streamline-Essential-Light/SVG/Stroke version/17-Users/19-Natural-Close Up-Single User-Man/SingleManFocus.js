import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManFocus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-focus_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-focus_svg__cls-1"
      d="M7.5 23.5h-6a1 1 0 01-1-1v-6M7.5.5h-6a1 1 0 00-1 1v6M16.5 23.5h6a1 1 0 001-1v-6M16.5.5h6a1 1 0 011 1v6"
    />,
    <path
      className="single-man-focus_svg__cls-1"
      d="M3.5 19.5l.481-1.6a2 2 0 011.128-1.263L9.5 14.75v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v2l4.391 1.882a2 2 0 011.128 1.268l.481 1.6"
    />
  );

export default SvgSingleManFocus;
