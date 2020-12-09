import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTypeCursor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".type-cursor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="type-cursor_svg__a"
      d="M17.5 7.498v9M13.5 3.5a4 4 0 014 4 4 4 0 014-4M13.5 20.5a4 4 0 004-4 4 4 0 004 4"
    />,
    <rect
      className="type-cursor_svg__a"
      x={0.5}
      y={7.498}
      width={23}
      height={9}
      rx={1}
      ry={1}
    />
  );

export default SvgTypeCursor;
