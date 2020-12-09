import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSimCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sim-card_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="sim-card_svg__a"
      d="M20.5 22.5a1 1 0 01-1 1h-15a1 1 0 01-1-1v-21a1 1 0 011-1h10.086a1 1 0 01.707.293l4.914 4.914a1 1 0 01.293.707z"
    />,
    <rect
      className="sim-card_svg__a"
      x={6.5}
      y={10.5}
      width={11}
      height={10}
      rx={1}
      ry={1}
    />,
    <path className="sim-card_svg__a" d="M6.5 15.5h11M6.5 12.5h3l5 6h3" />,
    <path className="sim-card_svg__a" d="M17.5 12.5h-3l-5 6h-3" />
  );

export default SvgSimCard;
