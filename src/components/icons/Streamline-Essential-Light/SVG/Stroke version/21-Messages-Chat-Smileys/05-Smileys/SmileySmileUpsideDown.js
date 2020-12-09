import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySmileUpsideDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-smile-upside-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-smile-upside-down_svg__a"
      d="M17.5 13.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M6.5 13.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M18 8.5a6.5 6.5 0 00-12 0"
    />,
    <circle
      className="smiley-smile-upside-down_svg__a"
      cx={12}
      cy={12}
      r={11.5}
    />
  );

export default SvgSmileySmileUpsideDown;
