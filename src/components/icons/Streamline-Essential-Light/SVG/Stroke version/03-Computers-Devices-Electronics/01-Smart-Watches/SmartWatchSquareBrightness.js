import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareBrightness = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-brightness_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-brightness_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-brightness_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3z"
    />,
    <circle
      className="smart-watch-square-brightness_svg__a"
      cx={12}
      cy={12}
      r={1.5}
    />,
    <path
      className="smart-watch-square-brightness_svg__a"
      d="M14.25 7.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M9.75 7.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M14.25 16a.25.25 0 10.25.25.25.25 0 00-.25-.25M9.75 16a.25.25 0 10.25.25.25.25 0 00-.25-.25M16.75 11.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M7.25 11.75A.25.25 0 117 12a.25.25 0 01.25-.25"
    />
  );

export default SvgSmartWatchSquareBrightness;
