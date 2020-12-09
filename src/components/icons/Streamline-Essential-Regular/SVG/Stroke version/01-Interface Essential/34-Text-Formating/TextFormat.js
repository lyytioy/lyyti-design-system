import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextFormat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-format_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="text-format_svg__a"
      d="M8.25 9V7.873a.376.376 0 01.375-.373h6.75a.376.376 0 01.375.375V9M12 7.498v9M10.875 16.498h2.25M3 15.748v-7.5"
    />,
    <rect
      className="text-format_svg__a"
      x={0.75}
      y={0.748}
      width={4.5}
      height={4.5}
      rx={0.563}
      ry={0.563}
    />,
    <rect
      className="text-format_svg__a"
      x={0.75}
      y={18.748}
      width={4.5}
      height={4.5}
      rx={0.563}
      ry={0.563}
    />,
    <path
      className="text-format_svg__a"
      d="M21 15.748v-7.5M8.25 2.998h7.5M8.25 20.998h7.5"
    />,
    <rect
      className="text-format_svg__a"
      x={18.75}
      y={0.748}
      width={4.5}
      height={4.5}
      rx={0.563}
      ry={0.563}
    />,
    <rect
      className="text-format_svg__a"
      x={18.75}
      y={18.748}
      width={4.5}
      height={4.5}
      rx={0.563}
      ry={0.563}
    />
  );

export default SvgTextFormat;
