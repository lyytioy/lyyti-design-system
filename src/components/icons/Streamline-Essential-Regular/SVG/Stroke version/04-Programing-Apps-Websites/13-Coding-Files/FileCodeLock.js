import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="file-code-lock_svg__a"
      x={14.247}
      y={15.754}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="file-code-lock_svg__a"
      d="M18.747 11.254a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.747 19.158a.375.375 0 11-.375.375.375.375 0 01.375-.375M10.5 20.254H2.247a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.871a1.5 1.5 0 01.439 1.061v3.129"
    />,
    <rect
      className="file-code-lock_svg__a"
      x={6.747}
      y={5.254}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-lock_svg__a"
      d="M3.747 5.254v4.5M12.747 5.254v4.5"
    />,
    <rect
      className="file-code-lock_svg__a"
      x={3.747}
      y={12.754}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path className="file-code-lock_svg__a" d="M9.747 12.754v4.5" />
  );

export default SvgFileCodeLock;
