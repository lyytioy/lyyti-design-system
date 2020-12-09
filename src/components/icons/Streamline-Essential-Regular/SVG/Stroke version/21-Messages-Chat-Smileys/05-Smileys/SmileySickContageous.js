import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySickContageous = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-sick-contageous_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="smiley-sick-contageous_svg__a"
      cx={12}
      cy={12}
      r={11.25}
    />,
    <path
      className="smiley-sick-contageous_svg__a"
      d="M9.75 6.834a3.689 3.689 0 00-4.018 1.934M14.25 6.834a3.689 3.689 0 014.018 1.934"
    />,
    <rect
      className="smiley-sick-contageous_svg__a"
      x={6.75}
      y={12.75}
      width={10.5}
      height={6.75}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="smiley-sick-contageous_svg__a"
      d="M17.25 17.25h4.702M6.75 17.25H2.048M6.917 13.563L.774 11.259M17.083 13.563l6.143-2.304"
    />
  );

export default SvgSmileySickContageous;
