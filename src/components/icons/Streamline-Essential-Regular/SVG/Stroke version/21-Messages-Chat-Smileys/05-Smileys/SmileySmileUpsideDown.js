import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySmileUpsideDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-smile-upside-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="smiley-smile-upside-down_svg__a"
      cx={12}
      cy={12}
      r={11.25}
    />,
    <path
      className="smiley-smile-upside-down_svg__a"
      d="M8.25 14.625a.375.375 0 10.375.375.375.375 0 00-.375-.375M15.75 14.625a.375.375 0 10.375.375.375.375 0 00-.375-.375M18.048 9a6.752 6.752 0 00-12.1 0"
    />
  );

export default SvgSmileySmileUpsideDown;
