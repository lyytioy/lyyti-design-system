import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyThrowUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-throw-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-throw-up_svg__a"
      d="M10.5 18.5v1M13.5 19.5v1M7.5 5a3.564 3.564 0 01-3 1.5M16.5 5a3.564 3.564 0 003 1.5M6.5 10.5h3L7 8M17.5 10.5h-3L17 8M16 18.5a2.5 2.5 0 000-5H8a2.5 2.5 0 000 5"
    />,
    <path
      className="smiley-throw-up_svg__a"
      d="M18 20.5a2 2 0 01-2-2 2 2 0 00-2-2h-4a2 2 0 00-2 2 2 2 0 01-2 2 1.5 1.5 0 000 3 4.841 4.841 0 002.5-.632 1.642 1.642 0 011.8.09 2.921 2.921 0 003.39 0 1.642 1.642 0 011.8-.09A4.841 4.841 0 0018 23.5a1.5 1.5 0 000-3zM20.5 19.746a11.5 11.5 0 10-17 0"
    />
  );

export default SvgSmileyThrowUp;
