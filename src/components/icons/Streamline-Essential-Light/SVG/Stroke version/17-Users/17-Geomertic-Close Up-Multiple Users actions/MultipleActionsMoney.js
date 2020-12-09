import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsMoney = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-money_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-money_svg__cls-1"
      cx={18.5}
      cy={18.5}
      r={5}
    />,
    <path
      className="multiple-actions-money_svg__cls-1"
      d="M18.5 20.5v1M18.5 15.5v1M16.5 20.5h3a1 1 0 000-2h-2a1 1 0 010-2h3M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-money_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-money_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-money_svg__cls-1"
      d="M19.47 10.605A6 6 0 0013 10.3"
    />
  );

export default SvgMultipleActionsMoney;
