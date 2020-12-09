import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureFlower = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-flower_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="picture-flower_svg__a"
      d="M23.25 18.75H.75V2.25a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5zM23.25 18.75H.75v3a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5zM12 18.75V9.775"
    />,
    <path
      className="picture-flower_svg__a"
      d="M10.581 5.5A6.243 6.243 0 0112 9.746a6.243 6.243 0 01-4.25-1.415c-1.563-1.563-2.2-3.464-1.415-4.246s2.683-.148 4.246 1.415z"
    />,
    <path
      className="picture-flower_svg__a"
      d="M13.419 5.5A6.243 6.243 0 0012 9.746a6.243 6.243 0 004.25-1.415c1.563-1.563 2.2-3.464 1.415-4.246s-2.683-.148-4.246 1.415zM10.581 14A6.243 6.243 0 0012 9.754a6.243 6.243 0 00-4.25 1.415c-1.563 1.563-2.2 3.465-1.415 4.246s2.683.148 4.246-1.415z"
    />,
    <path
      className="picture-flower_svg__a"
      d="M13.419 14A6.243 6.243 0 0112 9.754a6.243 6.243 0 014.246 1.415c1.563 1.563 2.2 3.465 1.415 4.246s-2.679.148-4.242-1.415z"
    />
  );

export default SvgPictureFlower;
