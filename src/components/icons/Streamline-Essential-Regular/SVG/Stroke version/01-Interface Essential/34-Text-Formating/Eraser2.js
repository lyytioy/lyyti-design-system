import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEraser2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".eraser-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="eraser-2_svg__a"
      x={5.893}
      y={4.194}
      width={12.728}
      height={10.607}
      rx={1.5}
      ry={1.5}
      transform="rotate(-45 12.257 9.498)"
    />,
    <path
      className="eraser-2_svg__a"
      d="M4.8 10.952l-2.421 2.424a3 3 0 000 4.243l1.189 1.189a1.5 1.5 0 001.061.44h3.257a1.5 1.5 0 001.061-.44l1.853-1.857M6 22.248h16.5"
    />
  );

export default SvgEraser2;
