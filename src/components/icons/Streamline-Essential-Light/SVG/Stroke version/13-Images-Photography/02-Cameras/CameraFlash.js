import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-flash_svg__a"
      d="M22.5 22a1.5 1.5 0 01-1.5 1.5H3A1.5 1.5 0 011.5 22v-9A1.5 1.5 0 013 11.5h5a2.782 2.782 0 001.707-.707L11 9.5h6l1.293 1.293A2.782 2.782 0 0020 11.5h1a1.5 1.5 0 011.5 1.5z"
    />,
    <path
      className="camera-flash_svg__a"
      d="M3.5 11.5v-1a1 1 0 011-1h1a1 1 0 011 1v1"
    />,
    <circle className="camera-flash_svg__a" cx={5} cy={15} r={1.5} />,
    <circle className="camera-flash_svg__a" cx={14.5} cy={17} r={2.5} />,
    <circle className="camera-flash_svg__a" cx={14.5} cy={17} r={4.5} />,
    <rect
      className="camera-flash_svg__a"
      x={8.5}
      y={0.5}
      width={11}
      height={6}
      rx={1}
      ry={1}
    />,
    <path
      className="camera-flash_svg__a"
      d="M10.5 2.5h7v2h-7zM10 6.5l1 3M18 6.5l-1 3"
    />
  );

export default SvgCameraFlash;
