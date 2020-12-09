import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyKiss1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-kiss-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-kiss-1_svg__a"
      d="M12.5 18.5h2a1 1 0 000-2 1 1 0 000-2h-2"
    />,
    <circle className="smiley-kiss-1_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-kiss-1_svg__a"
      d="M6.5 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 9.75a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgSmileyKiss1;
