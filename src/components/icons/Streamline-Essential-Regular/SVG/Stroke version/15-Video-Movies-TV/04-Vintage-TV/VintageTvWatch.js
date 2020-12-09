import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageTvWatch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-tv-watch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="vintage-tv-watch_svg__a"
      x={2.25}
      y={6.75}
      width={19.5}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="vintage-tv-watch_svg__a"
      d="M9.8 11.043a.75.75 0 00-1.085.671v5.072a.75.75 0 001.085.671l5.073-2.536a.751.751 0 000-1.342zM3.75 21.75v1.5M20.25 21.75v1.5M18 .75l-6 6-6-6"
    />
  );

export default SvgVintageTvWatch;
