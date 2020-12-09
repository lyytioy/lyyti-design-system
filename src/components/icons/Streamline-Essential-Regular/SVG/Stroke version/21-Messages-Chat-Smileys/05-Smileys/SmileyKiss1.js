import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyKiss1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-kiss-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-kiss-1_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-kiss-1_svg__a"
      d="M8.25 8.625A.375.375 0 117.875 9a.375.375 0 01.375-.375M15.75 8.625a.375.375 0 11-.375.375.375.375 0 01.375-.375M12.75 19.5h1.5a1.5 1.5 0 000-3 1.5 1.5 0 000-3h-1.5"
    />
  );

export default SvgSmileyKiss1;
