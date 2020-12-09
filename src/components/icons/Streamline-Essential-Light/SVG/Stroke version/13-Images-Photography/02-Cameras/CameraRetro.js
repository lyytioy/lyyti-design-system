import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraRetro = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-retro_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="camera-retro_svg__a"
      x={0.5}
      y={5.5}
      width={23}
      height={15}
      rx={1}
      ry={1}
    />,
    <path
      className="camera-retro_svg__a"
      d="M17.5 5.5v-1a1 1 0 011-1h2a1 1 0 011 1v1"
    />,
    <rect
      className="camera-retro_svg__a"
      x={2.5}
      y={7.5}
      width={4}
      height={2}
      rx={0.5}
      ry={0.5}
    />,
    <circle className="camera-retro_svg__a" cx={12} cy={14} r={4.5} />,
    <circle className="camera-retro_svg__a" cx={12} cy={14} r={2} />,
    <path
      className="camera-retro_svg__a"
      d="M.5 11.5h7.75M.5 16.5h7.781M15.766 11.5H23.5M23.5 16.5h-7.75M20 8.747a.25.25 0 11-.25.25.249.249 0 01.25-.25"
    />
  );

export default SvgCameraRetro;
