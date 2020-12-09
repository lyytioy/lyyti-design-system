import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsUpDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-up-down_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions-up-down_svg__cls-1"
      d="M11.5 20.513l3 3 3-3M14.5 23.513v-9M17.5 17.513l3-3 3 3M20.5 14.513v9M2.547 4.577A4.637 4.637 0 006 2.974a4.637 4.637 0 003.453 1.6"
    />,
    <circle
      className="single-woman-actions-up-down_svg__cls-1"
      cx={6}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-woman-actions-up-down_svg__cls-1"
      d="M6 9a3.8 3.8 0 013.7 2.918l1.8 6.582H8.543l-1.054 5h-3l-1.054-5H.5l1.805-6.582A3.8 3.8 0 016 9z"
    />
  );

export default SvgSingleWomanActionsUpDown;
