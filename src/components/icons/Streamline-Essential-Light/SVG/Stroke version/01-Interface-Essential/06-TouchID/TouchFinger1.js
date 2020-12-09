import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchFinger1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-finger-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touch-finger-1_svg__a"
      d="M15 12.472a6.5 6.5 0 10-7 0M9.156 23.5l-3.807-4.579A1.5 1.5 0 017.656 17L10 19.826V10a1.5 1.5 0 013 0v6.5h3a4 4 0 014 4v3"
    />
  );

export default SvgTouchFinger1;
