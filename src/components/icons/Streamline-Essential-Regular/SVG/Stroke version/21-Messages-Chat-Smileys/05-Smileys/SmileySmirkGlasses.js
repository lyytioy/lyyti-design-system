import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySmirkGlasses = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-smirk-glasses_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-smirk-glasses_svg__a"
      d="M18.048 15A6.75 6.75 0 0112 18.75M21.951 6.75a11.253 11.253 0 00-19.9 0M1.157 8.994a11.25 11.25 0 1021.686 0"
    />,
    <path
      className="smiley-smirk-glasses_svg__a"
      d="M12 6.75a5.821 5.821 0 01-5.625 6 5.821 5.821 0 01-5.625-6z"
    />,
    <path
      className="smiley-smirk-glasses_svg__a"
      d="M23.25 6.75a5.821 5.821 0 01-5.625 6 5.821 5.821 0 01-5.625-6z"
    />
  );

export default SvgSmileySmirkGlasses;
