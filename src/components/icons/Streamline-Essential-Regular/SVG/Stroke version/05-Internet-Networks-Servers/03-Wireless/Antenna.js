import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAntenna = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".antenna_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="antenna_svg__a"
      d="M11.266 15.23a3.75 3.75 0 113.75-3.75z"
    />,
    <rect
      className="antenna_svg__a"
      x={15.16}
      y={1.379}
      width={6}
      height={6}
      rx={1.5}
      ry={1.5}
      transform="rotate(-45 18.16 4.379)"
    />,
    <rect
      className="antenna_svg__a"
      x={1.371}
      y={15.374}
      width={6}
      height={6}
      rx={1.5}
      ry={1.5}
      transform="rotate(-45 4.372 18.374)"
    />,
    <path
      className="antenna_svg__a"
      d="M7.023 7.237l1.591 1.591M16.969 13.763a5.265 5.265 0 01-3.188 3.194M20.15 13.413a8.256 8.256 0 01-6.729 6.728M23.25 12.664A11.25 11.25 0 0112.5 23.25"
    />
  );

export default SvgAntenna;
