import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsMoney = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-money_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-money_svg__cls-1"
      d="M.75 17.25a6.753 6.753 0 019.4-6.208M3.945 2.781a6.848 6.848 0 004.93 2.094 6.847 6.847 0 002.712-.558"
    />,
    <circle
      className="single-man-actions-money_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-man-actions-money_svg__cls-1"
      d="M18.75 14.25h-2.034a1.342 1.342 0 00-.5 2.587l2.063.825a1.342 1.342 0 01-.5 2.588H15.75M17.25 14.25v-.75M17.25 21v-.75"
    />,
    <circle
      className="single-man-actions-money_svg__cls-1"
      cx={17.25}
      cy={17.25}
      r={6}
    />
  );

export default SvgSingleManActionsMoney;
