import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-add_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions-add_svg__cls-1"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="single-neutral-actions-add_svg__cls-1"
      d="M17.25 14.25v6M14.25 17.25h6M.75 17.25a6.753 6.753 0 019.4-6.208"
    />,
    <circle
      className="single-neutral-actions-add_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />
  );

export default SvgSingleNeutralActionsAdd;
