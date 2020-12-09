import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-shield_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-shield_svg__cls-1"
      d="M23.25 15.75a7.669 7.669 0 01-6 7.5 7.668 7.668 0 01-6-7.5v-3a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5zM17.25 15v4.5M15 17.25h4.5"
    />,
    <circle
      className="single-man-actions-shield_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-actions-shield_svg__cls-1"
      d="M9.173 9.317A5.25 5.25 0 00.75 13.5v2.25H3l.75 7.5h4.5l.45-4.537M6 8.25v6"
    />
  );

export default SvgSingleManActionsShield;
