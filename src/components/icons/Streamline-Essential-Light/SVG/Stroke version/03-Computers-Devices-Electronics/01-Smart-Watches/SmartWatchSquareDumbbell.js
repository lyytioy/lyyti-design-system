import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareDumbbell = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-dumbbell_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-dumbbell_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-dumbbell_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3zM10.5 12.5h3M8.5 9.5h2v6h-2a1 1 0 01-1-1v-4a1 1 0 011-1zM13.5 9.5h2a1 1 0 011 1v4a1 1 0 01-1 1h-2v-6zM16.5 12.5h1M6.5 12.5h1"
    />
  );

export default SvgSmartWatchSquareDumbbell;
