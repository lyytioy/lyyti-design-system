import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyEvil = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-evil_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-evil_svg__a"
      d="M17.5 17.574l-1.053-2.106a.5.5 0 00-.894 0l-1.106 2.211a.5.5 0 01-.894 0l-1.106-2.211a.5.5 0 00-.894 0l-1.106 2.211a.5.5 0 01-.894 0l-1.106-2.211a.5.5 0 00-.894 0L6.5 17.574"
    />,
    <circle className="smiley-evil_svg__a" cx={12} cy={12.055} r={11.5} />,
    <path className="smiley-evil_svg__a" d="M6 9.055l3.5 2M18 9.055l-3.5 2" />
  );

export default SvgSmileyEvil;
