import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-remove_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-remove_svg__cls-1"
      d="M.75 17.251a6.753 6.753 0 019.4-6.208M3.945 2.782a6.848 6.848 0 004.93 2.094 6.851 6.851 0 002.713-.558"
    />,
    <circle
      className="single-man-actions-remove_svg__cls-1"
      cx={7.5}
      cy={4.876}
      r={4.125}
    />,
    <circle
      className="single-man-actions-remove_svg__cls-1"
      cx={17.25}
      cy={17.249}
      r={6}
    />,
    <path
      className="single-man-actions-remove_svg__cls-1"
      d="M19.5 14.998l-4.5 4.5M15 14.998l4.5 4.5"
    />
  );

export default SvgSingleManActionsRemove;
