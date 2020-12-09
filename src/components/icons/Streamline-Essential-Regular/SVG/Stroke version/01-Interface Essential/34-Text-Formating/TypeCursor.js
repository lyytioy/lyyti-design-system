import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTypeCursor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".type-cursor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="type-cursor_svg__a"
      x={0.75}
      y={6.748}
      width={22.5}
      height={10.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="type-cursor_svg__a"
      d="M17.25 18.748v-13.5M12.75 23.248a4.5 4.5 0 004.5-4.5 4.5 4.5 0 004.5 4.5M12.75.748a4.5 4.5 0 014.5 4.5 4.5 4.5 0 014.5-4.5"
    />
  );

export default SvgTypeCursor;
