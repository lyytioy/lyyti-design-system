import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRssFeed = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rss-feed_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="rss-feed_svg__a" cx={4.5} cy={19.497} r={3.75} />,
    <path
      className="rss-feed_svg__a"
      d="M.75 8.844a11.328 11.328 0 0114.4 14.4M.75 1.113a18.777 18.777 0 0122.139 22.123"
    />
  );

export default SvgRssFeed;
