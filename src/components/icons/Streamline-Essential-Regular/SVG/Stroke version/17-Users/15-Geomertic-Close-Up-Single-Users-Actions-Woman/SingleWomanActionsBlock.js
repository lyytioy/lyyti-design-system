import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsBlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-block_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions-block_svg__cls-1"
      d="M11.241 17.249a6 6 0 116 6 6 6 0 01-6-6zM13 21.49l8.483-8.484M3.376 4.987v1a5.91 5.91 0 01-.859 3.273M11.623 4.987v1a5.909 5.909 0 00.86 3.273M3.388 5.206a5.487 5.487 0 004.112-1.9 5.487 5.487 0 004.112 1.9"
    />,
    <circle
      className="single-woman-actions-block_svg__cls-1"
      cx={7.5}
      cy={4.876}
      r={4.125}
    />,
    <path
      className="single-woman-actions-block_svg__cls-1"
      d="M.75 17.251a6.753 6.753 0 019.4-6.208"
    />
  );

export default SvgSingleWomanActionsBlock;
