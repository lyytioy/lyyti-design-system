import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPicturePolaroid = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-polaroid_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="picture-polaroid_svg__a"
      x={1}
      y={1}
      width={18}
      height={18}
      rx={2}
      ry={2}
    />,
    <path
      className="picture-polaroid_svg__a"
      d="M1 15h18M7.71 21L18 22.964a2 2 0 002.339-1.589l2.625-13.752a2 2 0 00-1.589-2.34L21 5.212"
    />
  );

export default SvgPicturePolaroid;
