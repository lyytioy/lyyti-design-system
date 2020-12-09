import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAntenna2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".antenna-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="antenna-2_svg__a" d="M10.999 23.5v-5h2v5" />,
    <rect
      className="antenna-2_svg__a"
      x={9.999}
      y={12.5}
      width={4}
      height={6}
      rx={1}
      ry={1}
    />,
    <path
      className="antenna-2_svg__a"
      d="M11.999 12.5v-4M9.999 14.102l-4.475.745M13.999 14.102l4.476.745M9 7.5a3 3 0 016 0M7 7.5a5 5 0 1110 0M5 7.5a7 7 0 1114 0M18.931 18l-.492-.087a.5.5 0 01-.405-.58L19 11.918a.5.5 0 01.579-.4l.493.087A6.2 6.2 0 0118.931 18zM5.068 18l.492-.087a.5.5 0 00.405-.58L5 11.918a.5.5 0 00-.58-.4l-.492.087A6.2 6.2 0 005.068 18z"
    />
  );

export default SvgAntenna2;
