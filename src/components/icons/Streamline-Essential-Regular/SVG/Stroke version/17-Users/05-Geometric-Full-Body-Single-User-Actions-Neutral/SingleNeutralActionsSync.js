import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-sync_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-sync_svg__cls-1"
      d="M19.5 15.75h3.75v-4.5M23.061 15.75a6 6 0 10-1.122 5.242"
    />,
    <circle
      className="single-neutral-actions-sync_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-actions-sync_svg__cls-1"
      d="M10.555 10.888A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h4.5l.323-3.233"
    />
  );

export default SvgSingleNeutralActionsSync;
