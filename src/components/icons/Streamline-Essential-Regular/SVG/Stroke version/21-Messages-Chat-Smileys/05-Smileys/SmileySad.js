import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySad = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-sad_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-sad_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-sad_svg__a"
      d="M18.75 21a6.75 6.75 0 00-13.5 0M18.75 9a2.25 2.25 0 01-4.243 0M9.493 9A2.25 2.25 0 015.25 9"
    />
  );

export default SvgSmileySad;
