import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyInLove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-in-love_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="smiley-in-love_svg__a" d="M6 15.5a6.5 6.5 0 0012 0" />,
    <circle className="smiley-in-love_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-in-love_svg__a"
      d="M7.143 11.5L4.464 8.706a1.586 1.586 0 01-.3-1.83 1.586 1.586 0 012.539-.411l.437.437.438-.437a1.585 1.585 0 012.538.411 1.585 1.585 0 01-.3 1.83zM16.857 11.5l2.679-2.795a1.586 1.586 0 00.3-1.83 1.586 1.586 0 00-2.539-.411l-.437.437-.438-.437a1.585 1.585 0 00-2.538.411 1.586 1.586 0 00.3 1.83z"
    />
  );

export default SvgSmileyInLove;
