import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhp1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".php-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="php-1_svg__a"
      x={0.752}
      y={0.753}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="php-1_svg__a"
      d="M4.502 18.004v-7.5M4.5 10.5h.75a2.25 2.25 0 110 4.5H4.5M16.502 18.004v-7.5M16.5 10.5h.75a2.25 2.25 0 010 4.5h-.75M10.502 18.004v-7.5M13.502 18.004v-7.5M10.502 15.004h3"
    />
  );

export default SvgPhp1;
