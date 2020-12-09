import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-square-star_svg__a"
      d="M12.589 6.859L13.871 9.5h2.495a.612.612 0 01.431 1.069l-2.166 2.263 1.2 2.761a.654.654 0 01-.931.819L12 14.778l-2.9 1.634a.654.654 0 01-.931-.819l1.2-2.761L7.2 10.569A.612.612 0 017.632 9.5h2.5l1.285-2.641a.662.662 0 011.172 0z"
    />,
    <rect
      className="smart-watch-square-star_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-star_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3z"
    />
  );

export default SvgSmartWatchSquareStar;
