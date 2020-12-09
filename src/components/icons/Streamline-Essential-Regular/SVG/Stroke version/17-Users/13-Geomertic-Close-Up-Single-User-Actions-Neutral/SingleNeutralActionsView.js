import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsView = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-view_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-view_svg__cls-1"
      d="M.75 17.25a6.756 6.756 0 018.636-6.483"
    />,
    <circle
      className="single-neutral-actions-view_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <circle
      className="single-neutral-actions-view_svg__cls-1"
      cx={15.75}
      cy={15.75}
      r={5.25}
    />,
    <path
      className="single-neutral-actions-view_svg__cls-1"
      d="M23.25 23.25l-3.788-3.788"
    />
  );

export default SvgSingleNeutralActionsView;
