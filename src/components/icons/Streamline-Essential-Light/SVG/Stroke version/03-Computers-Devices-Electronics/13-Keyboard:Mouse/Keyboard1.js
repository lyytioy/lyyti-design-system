import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboard1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-1_svg__a"
      x={0.5}
      y={13.5}
      width={23}
      height={10}
      rx={2}
      ry={2}
    />,
    <path
      className="keyboard-1_svg__a"
      d="M12 .5V1a1.5 1.5 0 001.5 1.5H20a3.5 3.5 0 010 7H6.5a3 3 0 00-3 3v1M7.498 20.5h9M8.498 16.5h1.997M3.5 16.5h1.998M13.498 16.5h1.997M18.495 16.5h1.998M8.505 18.5h1.997M3.507 18.5h1.998M13.505 18.5h1.997M18.502 18.5H20.5"
    />
  );

export default SvgKeyboard1;
