import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAddCircleBold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".add-circle-bold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="add-circle-bold_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="add-circle-bold_svg__a"
      d="M17.25 9.75h-3v-3a1.5 1.5 0 00-1.5-1.5h-1.5a1.5 1.5 0 00-1.5 1.5v3h-3a1.5 1.5 0 00-1.5 1.5v1.5a1.5 1.5 0 001.5 1.5h3v3a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 001.5-1.5v-3h3a1.5 1.5 0 001.5-1.5v-1.5a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgAddCircleBold;
