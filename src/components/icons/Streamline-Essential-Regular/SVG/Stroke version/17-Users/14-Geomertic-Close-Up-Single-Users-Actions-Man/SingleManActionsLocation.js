import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-location_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-location_svg__cls-1"
      d="M18.75 15.443a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="single-man-actions-location_svg__cls-1"
      d="M18.75 11.318a4.5 4.5 0 014.5 4.5c0 1.92-2.688 5.576-3.909 7.138a.75.75 0 01-1.182 0c-1.221-1.562-3.909-5.217-3.909-7.138a4.5 4.5 0 014.5-4.5zM12.21 12.432A6.742 6.742 0 00.75 17.256M3.945 2.787a6.848 6.848 0 004.93 2.094 6.847 6.847 0 002.712-.558"
    />,
    <circle
      className="single-man-actions-location_svg__cls-1"
      cx={7.5}
      cy={4.881}
      r={4.125}
    />
  );

export default SvgSingleManActionsLocation;
