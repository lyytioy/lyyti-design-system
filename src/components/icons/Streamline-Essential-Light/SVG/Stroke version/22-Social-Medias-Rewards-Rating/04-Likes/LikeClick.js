import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikeClick = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-click_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="like-click_svg__a"
      d="M13 12.5H6.5a6.018 6.018 0 01-6-6 6.018 6.018 0 016-6h11a6.018 6.018 0 016 6 6.011 6.011 0 01-2.934 5.152M10.5 9.499v-5M12.5 9.499v-5"
    />,
    <path
      className="like-click_svg__a"
      d="M14.5 9.499l-2-2.5 2-2.5M6.5 4.5v4a1 1 0 001 1h1M18.5 9.5h-1a1 1 0 01-1-1v-3a1 1 0 011-1h1M16.5 7.499h2M23.5 23.5v-2.668a3.333 3.333 0 00-3.333-3.332H18.5V13a1.5 1.5 0 00-3 0v7l-1.289-1.08a1.25 1.25 0 10-1.922 1.6l2.479 2.98"
    />
  );

export default SvgLikeClick;
