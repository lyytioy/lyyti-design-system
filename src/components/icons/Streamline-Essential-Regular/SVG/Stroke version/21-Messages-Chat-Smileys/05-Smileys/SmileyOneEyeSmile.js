import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyOneEyeSmile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-one-eye-smile_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-one-eye-smile_svg__a"
      d="M15.75 7.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <circle
      className="smiley-one-eye-smile_svg__a"
      cx={15.75}
      cy={8.25}
      r={3}
    />,
    <circle
      className="smiley-one-eye-smile_svg__a"
      cx={12}
      cy={12}
      r={11.25}
    />,
    <path
      className="smiley-one-eye-smile_svg__a"
      d="M18.366 14.25a.75.75 0 01.707 1 7.5 7.5 0 01-14.146 0 .75.75 0 01.707-1z"
    />,
    <circle
      className="smiley-one-eye-smile_svg__a"
      cx={7.5}
      cy={8.25}
      r={2.25}
    />
  );

export default SvgSmileyOneEyeSmile;
