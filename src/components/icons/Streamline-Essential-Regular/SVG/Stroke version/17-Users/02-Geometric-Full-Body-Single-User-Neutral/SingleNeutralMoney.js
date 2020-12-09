import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralMoney = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-money_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-money_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-money_svg__cls-1"
      d="M7.5 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5zM18.75 3.75h-2.033a1.342 1.342 0 00-.5 2.587l2.064.825a1.342 1.342 0 01-.5 2.588H15.75M17.25 3.754V3M17.25 10.5v-.746"
    />,
    <circle
      className="single-neutral-money_svg__cls-1"
      cx={17.25}
      cy={6.75}
      r={6}
    />
  );

export default SvgSingleNeutralMoney;
