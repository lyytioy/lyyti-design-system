import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cog-square_svg__a"
      d="M11.387 5.939a1.137 1.137 0 001.686 0l.545-.6a1.135 1.135 0 011.976.819l-.041.812a1.135 1.135 0 001.192 1.192l.812-.042a1.135 1.135 0 01.818 1.977l-.6.545a1.134 1.134 0 000 1.685l.6.545a1.135 1.135 0 01-.818 1.977l-.812-.042A1.135 1.135 0 0015.553 16l.041.812a1.135 1.135 0 01-1.976.819l-.545-.6a1.137 1.137 0 00-1.686 0l-.544.6a1.136 1.136 0 01-1.977-.819L8.907 16a1.135 1.135 0 00-1.191-1.2l-.812.042a1.136 1.136 0 01-.819-1.977l.6-.545a1.136 1.136 0 000-1.685l-.6-.545A1.136 1.136 0 016.9 8.116l.812.042a1.135 1.135 0 001.195-1.192l-.041-.812a1.136 1.136 0 011.977-.819z"
    />,
    <circle className="cog-square_svg__a" cx={12.23} cy={11.481} r={2.25} />,
    <rect
      className="cog-square_svg__a"
      x={0.75}
      y={0.751}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgCogSquare;
