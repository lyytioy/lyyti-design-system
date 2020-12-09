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
    <path
      className="single-neutral-actions-location_svg__cls-1"
      d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="single-neutral-actions-location_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <circle
      className="single-neutral-actions-location_svg__cls-1"
      cx={19}
      cy={16.221}
      r={1.5}
    />,
    <path
      className="single-neutral-actions-location_svg__cls-1"
      d="M23.5 16.221c0 2.476-3.065 5.973-4.136 7.12a.5.5 0 01-.728 0c-1.071-1.147-4.136-4.641-4.136-7.12a4.5 4.5 0 019 0z"
    />
  );

export default SvgSingleNeutralActionsLocation;
