import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralMoney = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-money_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-money_svg__cls-1"
      d="M19 3.5h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H16M17.5 3.286V2.5M17.5 10.5v-.786"
    />,
    <circle
      className="single-neutral-money_svg__cls-1"
      cx={17.5}
      cy={6.5}
      r={6}
    />,
    <path
      className="single-neutral-money_svg__cls-1"
      d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="single-neutral-money_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />
  );

export default SvgSingleNeutralMoney;
