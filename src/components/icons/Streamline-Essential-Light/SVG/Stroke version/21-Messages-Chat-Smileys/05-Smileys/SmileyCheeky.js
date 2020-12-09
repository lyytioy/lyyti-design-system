import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyCheeky = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-cheeky_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-cheeky_svg__a"
      d="M17.708 16.053A6.991 6.991 0 0112 19M5.5 8.5h3M12.5 8.5h3"
    />,
    <circle className="smiley-cheeky_svg__a" cx={12} cy={12} r={11.5} />
  );

export default SvgSmileyCheeky;
