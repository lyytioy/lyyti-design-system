import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileGiveHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-give-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-give-hand_svg__a"
      d="M.75 14.25v9M.75 21.75h15a3 3 0 00-3-3H9a3 3 0 00-3-3H.75M6 18.75h3M23.25 14.417a1.333 1.333 0 01-1.333 1.333h-9.334a1.333 1.333 0 01-1.333-1.333V2.083A1.333 1.333 0 0112.583.75h6.781a1.33 1.33 0 01.943.391l2.552 2.552a1.33 1.33 0 01.391.943z"
    />
  );

export default SvgCommonFileGiveHand;
