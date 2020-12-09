import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralUpDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-up-down_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-up-down_svg__cls-1"
      cx={12}
      cy={5.25}
      r={3}
    />,
    <path
      className="single-neutral-up-down_svg__cls-1"
      d="M15.75 15.75V13.5a3.75 3.75 0 00-7.5 0v2.25h1.5l.75 6h3l.75-6zM20.25 23.25v-7.5M3.75 8.25V.75M17.25 20.25l3 3 3-3M.75 3.75l3-3 3 3"
    />
  );

export default SvgSingleNeutralUpDown;
