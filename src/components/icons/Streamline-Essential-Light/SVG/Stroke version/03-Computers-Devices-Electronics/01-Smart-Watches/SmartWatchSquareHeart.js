import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-square-heart_svg__a"
      d="M12 16.375l-4.261-4.446a2.52 2.52 0 01-.473-2.91 2.521 2.521 0 014.034-.655l.7.7.7-.7a2.521 2.521 0 014.038.655 2.522 2.522 0 01-.472 2.91z"
    />,
    <rect
      className="smart-watch-square-heart_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-heart_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3z"
    />
  );

export default SvgSmartWatchSquareHeart;
