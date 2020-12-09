import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleNeutral1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-neutral-1_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-neutral-1_svg__cls-1"
      cx={7.5}
      cy={7.875}
      r={4.125}
    />,
    <path
      className="multiple-neutral-1_svg__cls-1"
      d="M.75 20.25a6.75 6.75 0 0113.5 0M14.251 4.416a4.125 4.125 0 11-.006 6.914M15 13.667a6.757 6.757 0 018.25 6.583"
    />
  );

export default SvgMultipleNeutral1;
