import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikeClick = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-click_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="like-click_svg__a"
      d="M23.136 23.25l.1-1.122a3 3 0 00-2.337-3.2l-3.651-.812v-4.841a1.875 1.875 0 10-3.75 0v8.3l-1.477-1.108a1.533 1.533 0 00-2.146 2.146l.474.632M9 9.75v-6M12 9.75v-6M14.025 8.775L12 6.75l3-3M3.75 3.75v4.8a1.375 1.375 0 001.5 1.2h1.5M20.25 9.75h-1.5a1.375 1.375 0 01-1.5-1.2v-3.6a1.375 1.375 0 011.5-1.2h1.5M17.25 6.75h3"
    />,
    <path
      className="like-click_svg__a"
      d="M10.5 12.75H2.25a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-1.5"
    />
  );

export default SvgLikeClick;
