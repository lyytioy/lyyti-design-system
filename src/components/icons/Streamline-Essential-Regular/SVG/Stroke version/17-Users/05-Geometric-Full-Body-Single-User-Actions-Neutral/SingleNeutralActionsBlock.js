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
    <circle
      className="single-neutral-actions-block_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-actions-block_svg__cls-1"
      d="M10.555 10.888A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h4.5l.323-3.233"
    />,
    <circle
      className="single-neutral-actions-block_svg__cls-1"
      cx={17.25}
      cy={17.247}
      r={6}
    />,
    <path
      className="single-neutral-actions-block_svg__cls-1"
      d="M13.008 21.489l8.484-8.484"
    />
  );

export default SvgSingleNeutralActionsBlock;
