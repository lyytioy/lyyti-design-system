import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyBad = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-bad_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-bad_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-bad_svg__a"
      d="M15.665 18.75a.76.76 0 00.744-.9 4.5 4.5 0 00-8.818 0 .759.759 0 00.744.9zM6.75 6.75l3 3H6M17.25 6.75l-3 3H18"
    />
  );

export default SvgSmileyBad;
