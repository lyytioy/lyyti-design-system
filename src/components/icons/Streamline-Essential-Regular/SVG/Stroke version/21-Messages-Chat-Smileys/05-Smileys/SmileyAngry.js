import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyAngry = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-angry_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-angry_svg__a"
      d="M7.951 4.5A5.888 5.888 0 0012 6a5.888 5.888 0 004.049-1.5"
    />,
    <circle className="smiley-angry_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-angry_svg__a"
      d="M8.25 8.625A.375.375 0 117.875 9a.375.375 0 01.375-.375M15.75 8.625a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle className="smiley-angry_svg__a" cx={12} cy={17.25} r={3} />
  );

export default SvgSmileyAngry;
