import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-code-edit_svg__a"
      d="M22.618 14.123l-7.631 7.631-3.75.75.75-3.75 7.631-7.631a2.115 2.115 0 012.991 0l.009.009a2.115 2.115 0 010 2.991zM8.238 20.254h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.439L16.8 4.064a1.5 1.5 0 01.44 1.061v3.129"
    />,
    <rect
      className="file-code-edit_svg__a"
      x={6.738}
      y={5.254}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-edit_svg__a"
      d="M3.738 5.254v4.5M12.738 5.254v4.5"
    />,
    <rect
      className="file-code-edit_svg__a"
      x={3.738}
      y={12.754}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path className="file-code-edit_svg__a" d="M9.738 12.894v4.5" />
  );

export default SvgFileCodeEdit;
