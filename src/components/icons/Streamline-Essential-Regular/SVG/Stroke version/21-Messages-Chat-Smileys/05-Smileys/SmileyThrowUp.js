import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyThrowUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-throw-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-throw-up_svg__a"
      d="M3.752 15.75a9.75 9.75 0 1116.5 0M15 18.994V15.75a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5v3.244c-2.215.369-3.75 1.125-3.75 2.006 0 1.243 3.022 2.25 6.75 2.25s6.75-1.007 6.75-2.25c0-.881-1.535-1.637-3.75-2.006z"
    />,
    <path
      className="smiley-throw-up_svg__a"
      d="M9 16.5c-1.36-.542-2.25-1.443-2.25-2.462 0-1.657 2.35-3 5.25-3s5.25 1.343 5.25 3c0 1.019-.89 1.92-2.25 2.462M7.5 6l2.25 2.25h-3M16.5 6l-2.25 2.25h3"
    />
  );

export default SvgSmileyThrowUp;
