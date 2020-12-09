import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarFavoriteHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-favorite-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-favorite-heart_svg__a"
      x={0.5}
      y={2.501}
      width={23}
      height={21}
      rx={1}
      ry={1}
    />,
    <path
      className="calendar-favorite-heart_svg__a"
      d="M5.5.501v5M18.5.501v5M.5 7.501h23M12 20l-4.139-4.318a2.447 2.447 0 01-.461-2.827 2.449 2.449 0 013.922-.636l.676.675.676-.675a2.449 2.449 0 013.922.636 2.448 2.448 0 01-.458 2.827z"
    />
  );

export default SvgCalendarFavoriteHeart;
