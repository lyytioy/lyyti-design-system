import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="file-code-check_svg__a" cx={17.239} cy={17.254} r={6} />,
    <path
      className="file-code-check_svg__a"
      d="M19.913 15.509l-2.906 3.874a.749.749 0 01-1.13.08l-1.5-1.5M8.239 20.254h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.439L16.8 4.064a1.5 1.5 0 01.44 1.061v3.129"
    />,
    <rect
      className="file-code-check_svg__a"
      x={6.739}
      y={5.254}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-check_svg__a"
      d="M3.739 5.254v4.5M12.739 5.254v4.5"
    />,
    <rect
      className="file-code-check_svg__a"
      x={3.739}
      y={12.754}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeCheck;
