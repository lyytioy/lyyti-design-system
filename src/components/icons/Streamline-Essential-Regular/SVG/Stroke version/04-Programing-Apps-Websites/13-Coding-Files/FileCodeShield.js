import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-code-shield_svg__a"
      d="M23.249 15.753a7.671 7.671 0 01-6 7.5 7.671 7.671 0 01-6-7.5v-3.54a1.5 1.5 0 01.915-1.382 12.535 12.535 0 0110.17 0 1.5 1.5 0 01.915 1.382zM17.249 12.754v6M14.249 15.754h6"
    />,
    <path
      className="file-code-shield_svg__a"
      d="M8.249 20.254h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.871a1.5 1.5 0 01.439 1.061v1.629"
    />,
    <rect
      className="file-code-shield_svg__a"
      x={6.749}
      y={5.254}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-shield_svg__a"
      d="M3.749 5.254v4.5M12.749 5.254v2.25"
    />,
    <rect
      className="file-code-shield_svg__a"
      x={3.749}
      y={12.754}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeShield;
