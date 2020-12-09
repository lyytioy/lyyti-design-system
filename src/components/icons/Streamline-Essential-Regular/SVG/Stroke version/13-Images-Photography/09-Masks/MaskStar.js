import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="mask-star_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1}
      ry={1}
    />,
    <path
      className="mask-star_svg__a"
      d="M12.971 4.367L15.087 9H19.2a1.059 1.059 0 01.712 1.839l-3.574 3.1 1.98 4.749a1.1 1.1 0 01-1.532 1.412L12 17.287 7.215 20.1a1.1 1.1 0 01-1.536-1.41l1.98-4.749-3.574-3.1A1.058 1.058 0 014.793 9H8.91l2.12-4.633a1.072 1.072 0 011.941 0z"
    />
  );

export default SvgMaskStar;
