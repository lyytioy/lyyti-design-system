import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyKiss = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-kiss_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-kiss_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-kiss_svg__a"
      d="M18.75 9.75a2.25 2.25 0 01-4.243 0M9.493 9.75a2.25 2.25 0 01-4.243 0"
    />,
    <circle className="smiley-kiss_svg__a" cx={15} cy={17.25} r={2.25} />
  );

export default SvgSmileyKiss;
