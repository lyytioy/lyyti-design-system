import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-code-sync_svg__a"
      d="M15 18.754h-3.75v3.75M22.668 19.487a5.572 5.572 0 01-10.74-.733M19.5 15.754h3.75v-3.75M11.833 15.02a5.573 5.573 0 0110.74.734"
    />,
    <path
      className="file-code-sync_svg__a"
      d="M8.25 20.254h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.061.439l2.871 2.871a1.5 1.5 0 01.439 1.061v3.129"
    />,
    <rect
      className="file-code-sync_svg__a"
      x={6.75}
      y={5.254}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-sync_svg__a"
      d="M3.75 5.254v4.5M12.75 5.254v4.5"
    />,
    <rect
      className="file-code-sync_svg__a"
      x={3.75}
      y={12.754}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeSync;
