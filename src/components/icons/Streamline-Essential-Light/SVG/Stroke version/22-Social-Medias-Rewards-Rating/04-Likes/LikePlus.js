import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikePlus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-plus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="like-plus_svg__a"
      d="M23.5 5.5H.5v16a2 2 0 002 2h19a2 2 0 002-2zM23.5 5.5H.5v-3a2 2 0 012-2h19a2 2 0 012 2zM16.5.5v5M7.5.5v5"
    />,
    <path
      className="like-plus_svg__a"
      d="M16.5 13.5h-3v-3h-3v3h-3v3h3v3h3v-3h3v-3z"
    />
  );

export default SvgLikePlus;
