import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsTime = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-time_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-time_svg__cls-1"
      cx={18.5}
      cy={18.5}
      r={5}
    />,
    <path
      className="multiple-actions-time_svg__cls-1"
      d="M18.5 15.5v3h2M.5 13.5a7.089 7.089 0 01.565-2.7c.4-.8 2.063-1.35 4.152-2.124.566-.209.473-1.684.223-1.96a4.163 4.163 0 01-1.086-3.231A2.725 2.725 0 017 .5a2.725 2.725 0 012.645 2.985 4.163 4.163 0 01-1.086 3.232c-.25.276-.343 1.751.223 1.96 2.089.774 3.754 1.327 4.152 2.124a7.078 7.078 0 01.566 2.7zM10.912.737A2.57 2.57 0 0112 .5a2.725 2.725 0 012.645 2.985 4.163 4.163 0 01-1.086 3.232c-.25.276-.343 1.751.223 1.96 2.089.774 3.754 1.327 4.152 2.124.032.064.063.13.091.2"
    />
  );

export default SvgMultipleActionsTime;
