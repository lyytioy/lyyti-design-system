import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-shield_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-shield_svg__cls-1"
      d="M23.25 15.75a7.669 7.669 0 01-6 7.5 7.668 7.668 0 01-6-7.5v-3a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5zM17.25 15v4.5M15 17.25h4.5M9.5 9.645A6.094 6.094 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-shield_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-shield_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-shield_svg__cls-1"
      d="M19.822 8.25a4.445 4.445 0 00-6.659 0"
    />
  );

export default SvgMultipleActionsShield;
