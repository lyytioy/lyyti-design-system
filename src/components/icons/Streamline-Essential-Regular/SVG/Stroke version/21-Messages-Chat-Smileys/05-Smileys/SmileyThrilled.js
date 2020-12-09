import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyThrilled = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-thrilled_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-thrilled_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-thrilled_svg__a"
      d="M5.634 14.25a.75.75 0 00-.707 1 7.5 7.5 0 0014.146 0 .75.75 0 00-.707-1zM18.493 10.5a2.25 2.25 0 00-4.243 0M9.75 10.5a2.25 2.25 0 00-4.243 0"
    />
  );

export default SvgSmileyThrilled;
