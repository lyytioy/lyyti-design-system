import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageTv = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-tv_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="vintage-tv_svg__a"
      d="M2.5 18.994c0 1 1 2 5.5 2h3c4.5 0 5.5-1 5.5-2v-8c0-1-1-2-5.5-2H8c-4.5 0-5.5 1-5.5 2zM16 6.994v-.5a4.45 4.45 0 00-8 0v.5M14.019 4.474L17.5.994M9.977 4.471L6.5.994"
    />,
    <rect
      className="vintage-tv_svg__a"
      x={0.5}
      y={6.997}
      width={23}
      height={16.01}
      rx={3}
      ry={3}
    />,
    <path
      className="vintage-tv_svg__a"
      d="M21.5 11.494a1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5zM21.5 16.494a1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5z"
    />
  );

export default SvgVintageTv;
