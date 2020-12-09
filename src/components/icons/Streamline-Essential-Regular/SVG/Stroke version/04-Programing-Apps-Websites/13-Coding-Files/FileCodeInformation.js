import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-information_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="file-code-information_svg__a"
      cx={17.241}
      cy={17.254}
      r={6}
    />,
    <path
      className="file-code-information_svg__a"
      d="M17.241 20.254v-3M17.241 14.314a.375.375 0 10.375.375.375.375 0 00-.375-.375M8.241 20.254h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.439l2.87 2.871a1.5 1.5 0 01.44 1.061v3.129"
    />,
    <rect
      className="file-code-information_svg__a"
      x={6.741}
      y={5.254}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-information_svg__a"
      d="M3.741 5.254v4.5M12.741 5.254v4.5"
    />,
    <rect
      className="file-code-information_svg__a"
      x={3.741}
      y={12.754}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeInformation;
