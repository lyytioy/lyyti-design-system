import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-flash_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-flash_svg__cls-1"
      d="M20.5 10.212a.25.25 0 00-.445-.156l-5.466 6.826a.376.376 0 00.286.618H17.5v5.288a.25.25 0 00.445.156l5.466-6.826a.376.376 0 00-.286-.618H20.5zM11.5 17.5H.5a7 7 0 0112.745-4M3.838 2.592A7.053 7.053 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-flash_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsFlash;
