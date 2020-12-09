import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-location_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-location_svg__cls-1"
      d="M18.75 15.443a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="single-neutral-actions-location_svg__cls-1"
      d="M18.75 11.318a4.5 4.5 0 014.5 4.5c0 1.92-2.688 5.576-3.909 7.138a.751.751 0 01-1.183 0c-1.221-1.561-3.908-5.217-3.908-7.137a4.5 4.5 0 014.5-4.501z"
    />,
    <circle
      className="single-neutral-actions-location_svg__cls-1"
      cx={7.5}
      cy={4.881}
      r={4.125}
    />,
    <path
      className="single-neutral-actions-location_svg__cls-1"
      d="M12.21 12.431A6.743 6.743 0 00.75 17.256"
    />
  );

export default SvgSingleNeutralActionsLocation;
