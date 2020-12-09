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
      d="M20.5 10.212a.25.25 0 00-.445-.156l-5.466 6.826a.376.376 0 00.286.618H17.5v5.288a.25.25 0 00.445.156l5.466-6.826a.376.376 0 00-.286-.618H20.5z"
      id="single-neutral-actions-flash_svg___Group_"
      data-name="&lt;Group&gt;"
    />,
    <circle
      className="single-neutral-actions-flash_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />,
    <path
      className="single-neutral-actions-flash_svg__cls-1"
      d="M11.5 17.5H.5a7 7 0 0112.745-4"
    />
  );

export default SvgSingleNeutralActionsFlash;
