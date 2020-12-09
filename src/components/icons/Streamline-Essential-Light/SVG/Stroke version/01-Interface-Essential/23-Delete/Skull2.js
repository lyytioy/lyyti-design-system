import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSkull2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".skull-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="skull-2_svg__a"
      d="M18.5 11a6.5 6.5 0 10-11 4.69V18a1.5 1.5 0 003 0 1.5 1.5 0 003 0 1.5 1.5 0 003 0v-2.31a6.478 6.478 0 002-4.69z"
    />,
    <circle className="skull-2_svg__a" cx={9} cy={11} r={1.5} />,
    <circle className="skull-2_svg__a" cx={15} cy={11} r={1.5} />,
    <path
      className="skull-2_svg__a"
      d="M13 15.5c-.263-.394-.46-.7-1-.7s-.737.3-1 .7M6.877 15L3.3 18.58a1.75 1.75 0 00-2.285 2.64l1.765 1.767A1.75 1.75 0 005.42 20.7l2.18-2.174M8 5.877L5.42 3.3a1.75 1.75 0 00-2.64-2.287L1.013 2.78A1.75 1.75 0 003.3 5.42l2.815 2.816M17.123 15l3.577 3.58a1.75 1.75 0 012.285 2.64l-1.765 1.767a1.75 1.75 0 01-2.64-2.287l-2.175-2.176M16 5.877L18.58 3.3a1.75 1.75 0 012.64-2.285l1.767 1.765A1.75 1.75 0 0120.7 5.42l-2.815 2.816"
    />
  );

export default SvgSkull2;
