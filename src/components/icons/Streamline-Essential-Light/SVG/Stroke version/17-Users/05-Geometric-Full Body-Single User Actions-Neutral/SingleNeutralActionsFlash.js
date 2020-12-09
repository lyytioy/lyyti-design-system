import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-flash_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-flash_svg__cls-1"
      d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="single-neutral-actions-flash_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-neutral-actions-flash_svg__cls-1"
      d="M20.5 10.2a.25.25 0 00-.445-.156l-5.466 6.826a.376.376 0 00.286.618H17.5v5.287a.25.25 0 00.445.157l5.466-6.826a.375.375 0 00-.286-.618H20.5z"
    />
  );

export default SvgSingleNeutralActionsFlash;
