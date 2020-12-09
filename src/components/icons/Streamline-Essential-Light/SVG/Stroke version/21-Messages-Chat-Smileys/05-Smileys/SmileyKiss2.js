import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyKiss2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-kiss-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-kiss-2_svg__a"
      d="M12.5 18.5h2a1 1 0 000-2 1 1 0 000-2h-2"
    />,
    <circle className="smiley-kiss-2_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-kiss-2_svg__a"
      d="M18.8 10.108a2.359 2.359 0 00-4 0M9.5 10.108a2.359 2.359 0 00-4 0"
    />
  );

export default SvgSmileyKiss2;
