import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphonesWave = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones-wave_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="headphones-wave_svg__a"
      x={0.75}
      y={14.25}
      width={3}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="headphones-wave_svg__a"
      x={20.25}
      y={14.25}
      width={3}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="headphones-wave_svg__a"
      d="M6.75 15.75h1.083a.75.75 0 00.637-.35l1.282-2.059a.75.75 0 011.322.092l1.894 4.261a.75.75 0 001.3.133l1.263-1.76a.746.746 0 01.609-.313h1.11"
    />,
    <path
      className="headphones-wave_svg__a"
      d="M20.25 15.752V12A8.274 8.274 0 0012 3.75 8.274 8.274 0 003.75 12v3.752"
    />
  );

export default SvgHeadphonesWave;
