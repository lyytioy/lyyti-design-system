import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-location_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions-location_svg__cls-1"
      d="M18.75 15.437a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="single-woman-actions-location_svg__cls-1"
      d="M18.75 11.312a4.5 4.5 0 014.5 4.5c0 1.921-2.688 5.577-3.91 7.138a.75.75 0 01-1.182 0c-1.221-1.562-3.908-5.217-3.908-7.138a4.5 4.5 0 014.5-4.5z"
    />,
    <circle
      className="single-woman-actions-location_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-actions-location_svg__cls-1"
      d="M8.25 23.25l.75-7.5h2.25V13.5a5.244 5.244 0 00-2.365-4.386L6 13.5 3.114 9.114A5.246 5.246 0 00.75 13.5v2.25H3l.75 7.5zM3 3.75S3 7.5.75 7.5M9 3.75S9 7.5 11.25 7.5"
    />
  );

export default SvgSingleWomanActionsLocation;
