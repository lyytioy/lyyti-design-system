import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyLolSide = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-lol-side_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-lol-side_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-lol-side_svg__a"
      d="M9.09 18.092A.751.751 0 009.3 19.3a7.5 7.5 0 0010-10 .75.75 0 00-1.207-.207zM4.575 12h4.243l-2.652 2.652M12 4.575v4.243l2.652-2.652"
    />
  );

export default SvgSmileyLolSide;
