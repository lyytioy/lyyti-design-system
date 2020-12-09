import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItAngel = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-angel_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="love-it-angel_svg__a"
      d="M3.75 16.5v-3M6.75 16.5a1.5 1.5 0 01-3 0v3a1.5 1.5 0 01-3 0V8.25a2.247 2.247 0 01.793-1.715M20.25 16.5v-3M17.25 16.5a1.5 1.5 0 003 0v3a1.5 1.5 0 003 0V8.25a2.247 2.247 0 00-.793-1.715M12 16.125L5.608 9.457A3.785 3.785 0 014.9 5.091a3.782 3.782 0 016.057-.983L12 5.152l1.044-1.044a3.782 3.782 0 016.057.983 3.783 3.783 0 01-.709 4.366z"
    />
  );

export default SvgLoveItAngel;
