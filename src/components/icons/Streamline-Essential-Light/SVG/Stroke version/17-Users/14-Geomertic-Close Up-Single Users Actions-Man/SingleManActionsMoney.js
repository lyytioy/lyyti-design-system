import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsMoney = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-money_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-money_svg__cls-1"
      d="M19 14.5h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H16M17.5 21.5v-.999"
    />,
    <circle
      className="single-man-actions-money_svg__cls-1"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="single-man-actions-money_svg__cls-1"
      d="M17.5 14.501V13.5M8.5 17.5h-8a7 7 0 0110.783-5.89M3.838 2.592A7.049 7.049 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-money_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsMoney;
