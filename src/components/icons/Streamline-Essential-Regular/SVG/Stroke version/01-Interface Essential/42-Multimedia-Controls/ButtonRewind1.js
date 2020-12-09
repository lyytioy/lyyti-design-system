import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonRewind1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-rewind-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="button-rewind-1_svg__a" cx={12} cy={11.998} r={11.25} />,
    <path
      className="button-rewind-1_svg__a"
      d="M9.284 7.964A1.591 1.591 0 0112 9.089V10.5l2.534-2.534a1.591 1.591 0 012.716 1.123v5.819a1.592 1.592 0 01-2.716 1.125L12 13.5v1.41a1.592 1.592 0 01-2.716 1.125L5.25 12z"
    />
  );

export default SvgButtonRewind1;
