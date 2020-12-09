import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyCrazy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-crazy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-crazy_svg__a"
      d="M6.756 21.956a11.25 11.25 0 1110.494 0M8.25 7.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle className="smiley-crazy_svg__a" cx={8.25} cy={8.25} r={3} />,
    <path
      className="smiley-crazy_svg__a"
      d="M18.493 9a2.25 2.25 0 00-4.243 0M15 19.626a7.522 7.522 0 004.35-5.376H4.65A7.522 7.522 0 009 19.626"
    />,
    <path
      className="smiley-crazy_svg__a"
      d="M12 23.25a3 3 0 01-3-3v-1.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v1.5a3 3 0 01-3 3z"
    />
  );

export default SvgSmileyCrazy;
