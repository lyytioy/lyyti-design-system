import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarFavoriteHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-favorite-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-favorite-heart_svg__a"
      x={0.75}
      y={3.75}
      width={22.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="calendar-favorite-heart_svg__a"
      d="M.75 9.75h22.5M6.75 6V.75M17.25 6V.75M15.93 13.6a1.9 1.9 0 00-2.751 0L12 14.814 10.821 13.6a1.9 1.9 0 00-2.751 0 2.059 2.059 0 000 2.844l3.511 3.631a.579.579 0 00.838 0l3.511-3.635a2.059 2.059 0 000-2.84z"
    />
  );

export default SvgCalendarFavoriteHeart;
