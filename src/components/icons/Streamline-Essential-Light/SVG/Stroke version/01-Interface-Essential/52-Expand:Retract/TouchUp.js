import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touch-up_svg__a"
      d="M12 3.999v8.5M14.5 8a6.5 6.5 0 11-5.031.012M9.997 5.999l2.003-2 2 2"
    />
  );

export default SvgTouchUp;
