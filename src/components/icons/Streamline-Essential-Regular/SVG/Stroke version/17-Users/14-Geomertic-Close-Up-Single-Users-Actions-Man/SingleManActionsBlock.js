import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsBlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-block_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-block_svg__cls-1"
      d="M.75 17.251a6.747 6.747 0 019.4-6.208M3.937 2.782a6.846 6.846 0 004.93 2.094 6.85 6.85 0 002.712-.558"
    />,
    <circle
      className="single-man-actions-block_svg__cls-1"
      cx={7.491}
      cy={4.876}
      r={4.125}
    />,
    <circle
      className="single-man-actions-block_svg__cls-1"
      cx={17.25}
      cy={17.249}
      r={6}
    />,
    <path
      className="single-man-actions-block_svg__cls-1"
      d="M13.008 21.49l8.484-8.484"
    />
  );

export default SvgSingleManActionsBlock;
