import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-location_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions-location_svg__cls-1"
      cx={19}
      cy={16.11}
      r={1.5}
    />,
    <path
      className="single-neutral-actions-location_svg__cls-1"
      d="M23.5 16.11c0 2.476-3.065 5.974-4.136 7.12a.5.5 0 01-.728 0c-1.071-1.146-4.136-4.644-4.136-7.12a4.5 4.5 0 019 0zM12.5 16.61H.5a8.722 8.722 0 01.7-3.322c.49-.981 2.539-1.661 5.111-2.613.689-.258.577-2.075.269-2.412a5.131 5.131 0 01-1.336-3.979A3.354 3.354 0 018.5.61a3.354 3.354 0 013.256 3.674 5.131 5.131 0 01-1.336 3.979c-.308.339-.422 2.154.273 2.412 1.04.385 2 .726 2.8 1.059"
    />
  );

export default SvgSingleNeutralActionsLocation;
