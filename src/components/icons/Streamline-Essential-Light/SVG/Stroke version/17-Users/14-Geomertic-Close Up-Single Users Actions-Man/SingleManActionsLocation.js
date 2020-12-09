import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-location_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-actions-location_svg__cls-1"
      cx={19}
      cy={16}
      r={1.5}
    />,
    <path
      className="single-man-actions-location_svg__cls-1"
      d="M23.5 16c0 2.476-3.065 5.973-4.136 7.12a.5.5 0 01-.728 0C17.565 21.973 14.5 18.476 14.5 16a4.5 4.5 0 019 0zM11.5 17.5H.5A7 7 0 0112.862 13M3.838 2.592A7.053 7.053 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-location_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsLocation;
