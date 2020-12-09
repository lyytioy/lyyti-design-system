import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySickContageous = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-sick-contageous_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-sick-contageous_svg__a"
      d="M5.5 9a3.564 3.564 0 013-1.5M18.5 9a3.564 3.564 0 00-3-1.5"
    />,
    <circle
      className="smiley-sick-contageous_svg__a"
      cx={12}
      cy={12}
      r={11.5}
    />,
    <rect
      className="smiley-sick-contageous_svg__a"
      x={6.5}
      y={12.5}
      width={11}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="smiley-sick-contageous_svg__a"
      d="M6.5 17.5H1.898M.5 12l6 2M17.5 17.5h4.602M23.5 12l-6 2"
    />
  );

export default SvgSmileySickContageous;
