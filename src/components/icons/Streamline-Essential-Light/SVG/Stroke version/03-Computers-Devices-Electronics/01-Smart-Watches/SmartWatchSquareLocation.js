import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-location_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-location_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-location_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3zM16 11.5c0 2.5-4 6-4 6s-4-3.5-4-6a4 4 0 018 0z"
    />,
    <path
      className="smart-watch-square-location_svg__a"
      d="M12 11.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgSmartWatchSquareLocation;
