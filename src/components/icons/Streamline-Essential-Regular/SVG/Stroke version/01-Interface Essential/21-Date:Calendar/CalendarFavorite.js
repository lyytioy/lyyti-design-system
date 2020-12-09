import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarFavorite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-favorite_svg__a,.calendar-favorite_svg__b{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px}.calendar-favorite_svg__b{stroke-linecap:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-favorite_svg__a"
      x={0.75}
      y={3.75}
      width={22.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="calendar-favorite_svg__a" d="M.75 9.75h22.5" />,
    <path
      className="calendar-favorite_svg__b"
      d="M6.75 6V.75M17.25 6V.75M11.564 12.682a.489.489 0 01.872 0l1.012 2.042a.484.484 0 00.365.262l2.273.329a.483.483 0 01.39.324.476.476 0 01-.121.49l-1.65 1.6a.476.476 0 00-.138.421l.389 2.255a.473.473 0 01-.194.467.491.491 0 01-.511.035l-2.024-1.059a.492.492 0 00-.454 0l-2.024 1.059a.491.491 0 01-.511-.035.473.473 0 01-.194-.467l.389-2.255a.476.476 0 00-.138-.421l-1.65-1.6a.476.476 0 01-.121-.49.482.482 0 01.39-.324l2.272-.329a.484.484 0 00.366-.262z"
    />
  );

export default SvgCalendarFavorite;
