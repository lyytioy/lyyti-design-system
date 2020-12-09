import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-location_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-location_svg__cls-1"
      d="M18.75 15.437a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="single-neutral-actions-location_svg__cls-1"
      d="M18.75 11.312a4.5 4.5 0 014.5 4.5c0 1.92-2.688 5.576-3.91 7.138a.75.75 0 01-1.182 0c-1.221-1.561-3.908-5.217-3.908-7.137a4.5 4.5 0 014.5-4.501z"
    />,
    <circle
      className="single-neutral-actions-location_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-actions-location_svg__cls-1"
      d="M11.25 13.5a5.25 5.25 0 00-10.5 0v2.25H3l.75 7.5h4.5l.75-7.5h2.25z"
    />
  );

export default SvgSingleNeutralActionsLocation;
