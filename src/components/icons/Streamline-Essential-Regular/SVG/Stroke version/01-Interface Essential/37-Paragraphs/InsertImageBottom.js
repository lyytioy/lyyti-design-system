import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInsertImageBottom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".insert-image-bottom_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="insert-image-bottom_svg__a"
      d="M9.75 1.498h9.75M9.75 5.998h13.5M9.75 10.498h9.75"
    />,
    <rect
      className="insert-image-bottom_svg__a"
      x={9.75}
      y={14.998}
      width={13.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="insert-image-bottom_svg__a"
      d="M6.75 18.748h-6M3.75 21.748l3-3-3-3"
    />
  );

export default SvgInsertImageBottom;
