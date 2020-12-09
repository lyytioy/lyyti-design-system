import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyGlasses = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-glasses_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-glasses_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-glasses_svg__a"
      d="M15.873 15.5a1 1 0 01.97 1.249 5 5 0 01-9.686 0 1 1 0 01.97-1.249zM10.5 9.5h3"
    />,
    <rect
      className="smiley-glasses_svg__a"
      x={4.5}
      y={7.5}
      width={6}
      height={4}
      rx={1}
      ry={1}
    />,
    <rect
      className="smiley-glasses_svg__a"
      x={13.5}
      y={7.5}
      width={6}
      height={4}
      rx={1}
      ry={1}
    />
  );

export default SvgSmileyGlasses;
