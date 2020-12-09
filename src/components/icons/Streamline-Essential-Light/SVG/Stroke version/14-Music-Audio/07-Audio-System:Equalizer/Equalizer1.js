import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEqualizer1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".equalizer-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="equalizer-1_svg__a"
      x={0.5}
      y={1}
      width={23}
      height={22}
      rx={1}
      ry={1}
    />,
    <path className="equalizer-1_svg__a" d="M4.5 9v6" />,
    <rect
      className="equalizer-1_svg__a"
      x={3.5}
      y={15}
      width={2}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <path className="equalizer-1_svg__a" d="M4.5 18v3M9.5 9v4" />,
    <rect
      className="equalizer-1_svg__a"
      x={8.5}
      y={13}
      width={2}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <path className="equalizer-1_svg__a" d="M9.5 16v5M14.5 9v2" />,
    <rect
      className="equalizer-1_svg__a"
      x={13.5}
      y={11}
      width={2}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <path className="equalizer-1_svg__a" d="M14.5 14v7M19.5 9v7" />,
    <rect
      className="equalizer-1_svg__a"
      x={18.5}
      y={16}
      width={2}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="equalizer-1_svg__a"
      d="M19.5 19v2M21.5 5a1 1 0 00-1-1h-17a1 1 0 000 2h17a1 1 0 001-1z"
    />
  );

export default SvgEqualizer1;
