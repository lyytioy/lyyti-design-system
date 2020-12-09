import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="file-code-remove_svg__a"
      cx={17.249}
      cy={17.254}
      r={6}
    />,
    <path
      className="file-code-remove_svg__a"
      d="M19.499 15.003l-4.5 4.5M14.999 15.003l4.5 4.5M8.249 20.254h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.871a1.5 1.5 0 01.439 1.061v3.129"
    />,
    <rect
      className="file-code-remove_svg__a"
      x={6.749}
      y={5.254}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-remove_svg__a"
      d="M3.749 5.254v4.5M12.749 5.254v4.5"
    />,
    <rect
      className="file-code-remove_svg__a"
      x={3.749}
      y={12.754}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeRemove;
