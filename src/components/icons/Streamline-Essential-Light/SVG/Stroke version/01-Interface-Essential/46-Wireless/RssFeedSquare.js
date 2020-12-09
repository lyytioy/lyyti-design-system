import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRssFeedSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rss-feed-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="rss-feed-square_svg__a"
      d="M5 10.5a8.5 8.5 0 018.5 8.5M5 5.5A13.5 13.5 0 0118.5 19"
    />,
    <circle className="rss-feed-square_svg__a" cx={7} cy={16.998} r={1.5} />,
    <path
      className="rss-feed-square_svg__a"
      d="M23.5 20.5a3.009 3.009 0 01-3 3h-17a3.009 3.009 0 01-3-3v-17a3.009 3.009 0 013-3h17a3.009 3.009 0 013 3z"
    />
  );

export default SvgRssFeedSquare;
