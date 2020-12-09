import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTrendsHot1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".trends-hot-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="trends-hot-1_svg__a"
      x={0.75}
      y={6}
      width={22.5}
      height={12}
      rx={3}
      ry={3}
    />,
    <path
      className="trends-hot-1_svg__a"
      d="M18 15V9M16.5 9h3M5.25 15V9M8.25 15V9M5.25 12h3M12.75 9a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 003 0v-3a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgTrendsHot1;
