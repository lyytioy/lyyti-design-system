import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageCameraPolaroid = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-camera-polaroid_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="vintage-camera-polaroid_svg__a"
      d="M19 19.5h3a1.5 1.5 0 001.5-1.5v-3a2.54 2.54 0 00-.223-.947L21.5 10.5v-7a3 3 0 00-3-3h-13a3 3 0 00-3 3v7L.723 14.053A2.54 2.54 0 00.5 15v3A1.5 1.5 0 002 19.5h2.935"
    />,
    <path
      className="vintage-camera-polaroid_svg__a"
      d="M20.67 22.676a.5.5 0 01-.381.824H3.615a.5.5 0 01-.391-.811A10.945 10.945 0 005.5 16.5h13a10.65 10.65 0 002.17 6.176z"
    />,
    <circle
      className="vintage-camera-polaroid_svg__a"
      cx={12}
      cy={5.497}
      r={3}
    />,
    <rect
      className="vintage-camera-polaroid_svg__a"
      x={16.5}
      y={2.5}
      width={3}
      height={2}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="vintage-camera-polaroid_svg__a"
      d="M10.5 2.898V.5M13.5 2.898V.5M10.5 10.497V8.095M13.5 10.497V8.095M2.5 10.497h19M.569 14.5h22.862M2.5 16.5h19M4.035 21.5h15.814"
    />
  );

export default SvgVintageCameraPolaroid;
