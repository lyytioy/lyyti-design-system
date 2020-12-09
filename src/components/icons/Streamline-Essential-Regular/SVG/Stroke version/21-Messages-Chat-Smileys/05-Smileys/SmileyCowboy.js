import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyCowboy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-cowboy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-cowboy_svg__a"
      d="M19.826 7.5l-1.693-4.673A2.96 2.96 0 0015.424.75H8.576a2.96 2.96 0 00-2.709 2.077L4.174 7.5"
    />,
    <path
      className="smiley-cowboy_svg__a"
      d="M22.677 3.659a2.421 2.421 0 01.573 1.591 2.119 2.119 0 01-1.957 2.25H2.706A2.119 2.119 0 01.75 5.25a2.421 2.421 0 01.573-1.591M21.337 10.686a9.75 9.75 0 11-18.65-.086"
    />,
    <path
      className="smiley-cowboy_svg__a"
      d="M6.974 15a.75.75 0 00-.707 1A6.157 6.157 0 0012 20.25 6.158 6.158 0 0017.731 16a.751.751 0 00-.708-1zM8.249 10.5a.375.375 0 11-.375.375.375.375 0 01.375-.375M15.749 10.5a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgSmileyCowboy;
