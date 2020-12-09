import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyKiss2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-kiss-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-kiss-2_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-kiss-2_svg__a"
      d="M12.75 19.5h1.5a1.5 1.5 0 000-3 1.5 1.5 0 000-3h-1.5M5.25 9.75a1.8 1.8 0 013 0M15.75 9.75a1.8 1.8 0 013 0"
    />
  );

export default SvgSmileyKiss2;
