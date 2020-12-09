import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="picture-double_svg__a"
      x={6.75}
      y={9.75}
      width={16.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="picture-double_svg__a"
      d="M17.25 6.75v-3a1.5 1.5 0 00-1.5-1.5H2.25a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5h1.5"
    />
  );

export default SvgPictureDouble;
