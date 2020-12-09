import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanMoney = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-money_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-money_svg__cls-1"
      d="M18.75 3.75h-2.033a1.342 1.342 0 00-.5 2.587l2.064.825a1.342 1.342 0 01-.5 2.588H15.75M17.25 3.754V3M17.25 10.5v-.746"
    />,
    <circle
      className="single-woman-money_svg__cls-1"
      cx={17.25}
      cy={6.75}
      r={6}
    />,
    <circle
      className="single-woman-money_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-money_svg__cls-1"
      d="M8.034 9.216L5.25 12.75 2.466 9.216A4.489 4.489 0 00.75 12.75v3h1.5l.75 7.5h4.5l.75-7.5h1.5v-3a4.489 4.489 0 00-1.716-3.534zM2.25 3.75s0 3-1.5 3"
    />
  );

export default SvgSingleWomanMoney;
