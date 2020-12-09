import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-code-heart_svg__a"
      d="M17.237 23.254l-5.114-5.335a3.027 3.027 0 01-.567-3.493 3.026 3.026 0 014.844-.786l.835.835.835-.835a3.025 3.025 0 014.845.786 3.028 3.028 0 01-.566 3.493z"
    />,
    <path
      className="file-code-heart_svg__a"
      d="M8.237 20.254h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.439L16.8 4.064a1.5 1.5 0 01.44 1.061v3.129"
    />,
    <rect
      className="file-code-heart_svg__a"
      x={6.737}
      y={5.254}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-heart_svg__a"
      d="M3.737 5.254v4.5M12.737 5.254v4.5"
    />,
    <rect
      className="file-code-heart_svg__a"
      x={3.737}
      y={12.754}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeHeart;
