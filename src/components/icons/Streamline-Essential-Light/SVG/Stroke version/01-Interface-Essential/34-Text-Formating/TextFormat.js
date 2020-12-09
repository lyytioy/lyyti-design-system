import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextFormat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-format_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="text-format_svg__a"
      d="M21.5 5.498v13M5.5 2.498h13M2.5 18.498v-13M18.5 21.498h-13"
    />,
    <rect
      className="text-format_svg__a"
      x={0.5}
      y={0.498}
      width={3}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="text-format_svg__a"
      x={20.5}
      y={0.498}
      width={3}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="text-format_svg__a"
      x={0.5}
      y={20.498}
      width={3}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="text-format_svg__a"
      x={20.5}
      y={20.498}
      width={3}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="text-format_svg__a"
      d="M7 8.5V7a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v1.5M12 6.498v12M10.5 18.498h3"
    />
  );

export default SvgTextFormat;
