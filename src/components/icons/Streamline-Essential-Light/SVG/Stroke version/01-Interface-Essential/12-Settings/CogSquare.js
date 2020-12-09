import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="cog-square_svg__a"
      x={0.5}
      y={0.501}
      width={23}
      height={23}
      rx={4}
      ry={4}
    />,
    <circle className="cog-square_svg__a" cx={12} cy={12.501} r={2.5} />,
    <path
      className="cog-square_svg__a"
      d="M17.386 11.412l.685-.4a1 1 0 00.366-1.366l-.75-1.3a1 1 0 00-1.366-.366l-.684.394a5.525 5.525 0 00-1.888-1.092V6.5a1 1 0 00-1-1h-1.5a1 1 0 00-1 1v.8a5.454 5.454 0 00-1.885 1.081l-.685-.4a1 1 0 00-1.366.366l-.75 1.3a1 1 0 00.365 1.366l.684.4a5.451 5.451 0 000 2.178l-.685.395a1 1 0 00-.366 1.366l.75 1.3a1 1 0 001.366.366l.684-.395a5.525 5.525 0 001.886 1.092v.785a1 1 0 001 1h1.5a1 1 0 001-1v-.793a5.458 5.458 0 001.886-1.087l.686.4a1 1 0 001.366-.366l.75-1.3a1 1 0 00-.366-1.366l-.684-.394a5.438 5.438 0 00.001-2.182z"
    />
  );

export default SvgCogSquare;
