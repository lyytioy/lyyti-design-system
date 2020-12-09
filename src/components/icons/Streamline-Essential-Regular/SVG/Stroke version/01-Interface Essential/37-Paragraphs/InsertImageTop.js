import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInsertImageTop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".insert-image-top_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="insert-image-top_svg__a"
      d="M6.75 5.248h-6M3.75 8.248l3-3-3-3M9.75 13.498h9.75M9.75 17.998h13.5M9.75 22.498h9.75"
    />,
    <rect
      className="insert-image-top_svg__a"
      x={9.75}
      y={1.498}
      width={13.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgInsertImageTop;
