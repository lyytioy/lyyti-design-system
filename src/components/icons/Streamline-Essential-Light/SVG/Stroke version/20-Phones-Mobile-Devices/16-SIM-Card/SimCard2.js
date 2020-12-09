import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSimCard2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sim-card-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="sim-card-2_svg__a"
      d="M20.5 22.5a1 1 0 01-1 1h-15a1 1 0 01-1-1v-21a1 1 0 011-1h10.527a1 1 0 01.773.365l4.472 5.442a.992.992 0 01.228.634z"
    />,
    <rect
      className="sim-card-2_svg__a"
      x={6.5}
      y={11.5}
      width={11}
      height={9}
      rx={2}
      ry={2}
    />,
    <path
      className="sim-card-2_svg__a"
      d="M9.5 20.5v-9M14.5 20.5v-9M14.5 14.5h3M6.5 14.5h3M14.5 17.5h3M6.5 17.5h3M6.5.5v4M9.5.5v4M12.5.5v4"
    />
  );

export default SvgSimCard2;
