import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodRock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-rock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mood-rock_svg__a"
      d="M10.578 14.863a1.961 1.961 0 01-2.491-1.886V9.553a1.957 1.957 0 013.913 0v3M12 12.488V9.553a1.957 1.957 0 013.913 0v2.935M19.826 16.087V2.707a1.957 1.957 0 10-3.913 0v6.846"
    />,
    <path
      className="mood-rock_svg__a"
      d="M12 20.314a3.911 3.911 0 013.913-3.914h-3.424a1.957 1.957 0 010-3.913h3.452a3.973 3.973 0 012.321.751 3.6 3.6 0 011.564 2.848c0 3.065-3.086 7.163-7.826 7.163a7.826 7.826 0 01-7.826-7.826V4.663a1.957 1.957 0 113.913 0v4.89"
    />
  );

export default SvgMoodRock;
