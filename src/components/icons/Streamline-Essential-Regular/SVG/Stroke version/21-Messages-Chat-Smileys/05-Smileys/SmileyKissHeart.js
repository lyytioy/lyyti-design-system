import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyKissHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-kiss-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-kiss-heart_svg__a"
      d="M18.782 23.25l-1.573-3.6a1.609 1.609 0 01.359-1.848 1.609 1.609 0 012.563.5l.264.57.57-.263a1.61 1.61 0 012.275 1.282 1.61 1.61 0 01-.925 1.64zM15.165 22.8a11.241 11.241 0 117.5-7.222"
    />,
    <path
      className="smiley-kiss-heart_svg__a"
      d="M8.25 8.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M14.25 9a1.8 1.8 0 013 0M11.25 19.5h1.5a1.5 1.5 0 000-3 1.5 1.5 0 000-3h-1.5"
    />
  );

export default SvgSmileyKissHeart;
