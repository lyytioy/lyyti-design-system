import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRssFeedSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rss-feed-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="rss-feed-square_svg__a"
      x={0.75}
      y={0.747}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="rss-feed-square_svg__a" cx={7.5} cy={16.497} r={2.25} />,
    <path
      className="rss-feed-square_svg__a"
      d="M5.205 10.126a6.807 6.807 0 018.4 9.36M5.359 5.445a11.279 11.279 0 0113 14.08"
    />
  );

export default SvgRssFeedSquare;
