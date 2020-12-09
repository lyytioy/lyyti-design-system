import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRssFeed = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rss-feed_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="rss-feed_svg__a" cx={3} cy={20.998} r={2.5} />,
    <path
      className="rss-feed_svg__a"
      d="M23.5 23.5A23 23 0 00.5.5M14.5 23.5a14 14 0 00-14-14"
    />
  );

export default SvgRssFeed;
