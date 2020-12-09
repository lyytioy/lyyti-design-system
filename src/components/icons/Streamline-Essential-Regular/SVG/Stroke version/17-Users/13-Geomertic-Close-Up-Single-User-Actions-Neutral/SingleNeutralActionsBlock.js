import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsBlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-block_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-block_svg__cls-1"
      d="M.75 17.251a6.753 6.753 0 019.4-6.208"
    />,
    <circle
      className="single-neutral-actions-block_svg__cls-1"
      cx={7.5}
      cy={4.876}
      r={4.125}
    />,
    <circle
      className="single-neutral-actions-block_svg__cls-1"
      cx={17.25}
      cy={17.249}
      r={6}
    />,
    <path
      className="single-neutral-actions-block_svg__cls-1"
      d="M13.008 21.49l8.484-8.484"
    />
  );

export default SvgSingleNeutralActionsBlock;
