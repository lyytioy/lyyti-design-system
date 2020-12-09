import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-flash_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions-flash_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-neutral-actions-flash_svg__cls-1"
      d="M12.21 12.425A6.743 6.743 0 00.75 17.25M20.25 9.75l-5.911 6.882a.375.375 0 00.286.618h2.625v6l5.91-6.882a.375.375 0 00-.285-.618H20.25z"
    />
  );

export default SvgSingleNeutralActionsFlash;
