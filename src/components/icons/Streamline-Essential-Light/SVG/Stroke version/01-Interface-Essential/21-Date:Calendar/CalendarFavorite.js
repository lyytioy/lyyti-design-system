import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarFavorite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-favorite_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-favorite_svg__a"
      x={0.5}
      y={2.501}
      width={23}
      height={21}
      rx={1}
      ry={1}
    />,
    <path
      className="calendar-favorite_svg__a"
      d="M5.5.501v5M18.5.501v5M.5 7.501h23M12.589 9.859l1.282 2.769h2.495A.612.612 0 0116.8 13.7l-2.166 2.136 1.2 2.761a.654.654 0 01-.931.818L12 17.778l-2.9 1.634a.654.654 0 01-.931-.818l1.2-2.761L7.2 13.7a.612.612 0 01.429-1.069h2.5l1.285-2.769a.662.662 0 011.175-.003z"
    />
  );

export default SvgCalendarFavorite;
