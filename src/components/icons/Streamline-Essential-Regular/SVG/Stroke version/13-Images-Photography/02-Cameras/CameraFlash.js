import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-flash_svg__a"
      d="M18 12.75l-1.085-2.171a1.5 1.5 0 00-1.342-.829h-4.146a1.5 1.5 0 00-1.342.829L9 12.75H4.5a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <path
      className="camera-flash_svg__a"
      d="M6.375 15.75a.375.375 0 11-.375.375.375.375 0 01.375-.375M6 12.75v-1.5"
    />,
    <circle className="camera-flash_svg__a" cx={13.5} cy={17.25} r={3} />,
    <rect
      className="camera-flash_svg__a"
      x={9}
      y={0.75}
      width={9}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="camera-flash_svg__a"
      d="M10.5 5.25l.927 4.5h4.146l.927-4.5h-6z"
    />
  );

export default SvgCameraFlash;
