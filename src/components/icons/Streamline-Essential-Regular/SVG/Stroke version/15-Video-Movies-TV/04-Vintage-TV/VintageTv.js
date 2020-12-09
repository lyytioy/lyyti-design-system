import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageTv = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-tv_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="vintage-tv_svg__a"
      x={0.75}
      y={6}
      width={22.5}
      height={16.5}
      rx={3}
      ry={3}
    />,
    <path
      className="vintage-tv_svg__a"
      d="M3.75 17.578v-6.656A1.5 1.5 0 014.956 9.45 24.231 24.231 0 019.75 9a24.231 24.231 0 014.794.45 1.5 1.5 0 011.206 1.472v6.656a1.5 1.5 0 01-1.206 1.472 24.231 24.231 0 01-4.794.45 24.231 24.231 0 01-4.794-.45 1.5 1.5 0 01-1.206-1.472zM19.5 11.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M19.5 15.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M7.5 1.5L12.75 6l4.5-4.5"
    />
  );

export default SvgVintageTv;
