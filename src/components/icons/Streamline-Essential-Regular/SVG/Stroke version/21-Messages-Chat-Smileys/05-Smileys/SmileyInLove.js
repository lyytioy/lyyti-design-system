import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyInLove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-in-love_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-in-love_svg__a"
      d="M22.354 7.593a11.25 11.25 0 11-20.708 0M4.06 4.031a11.248 11.248 0 0115.88 0M18.048 15a6.752 6.752 0 01-12.1 0"
    />,
    <path
      className="smiley-in-love_svg__a"
      d="M9.782 4.251a2.036 2.036 0 00-2.948 0L5.571 5.557 4.308 4.251a2.035 2.035 0 00-2.947 0 2.2 2.2 0 000 3.047l3.762 3.891a.62.62 0 00.9 0L9.782 7.3a2.206 2.206 0 000-3.049zM22.639 4.251a2.035 2.035 0 00-2.947 0l-1.263 1.306-1.263-1.306a2.036 2.036 0 00-2.948 0 2.206 2.206 0 000 3.047l3.762 3.891a.62.62 0 00.9 0L22.639 7.3a2.2 2.2 0 000-3.049z"
    />
  );

export default SvgSmileyInLove;
