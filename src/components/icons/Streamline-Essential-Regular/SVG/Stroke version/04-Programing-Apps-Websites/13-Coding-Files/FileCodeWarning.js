import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-code-warning_svg__a"
      d="M17.237 20.254a.375.375 0 11-.375.375.374.374 0 01.375-.375M17.237 18.004v-3"
    />,
    <path
      className="file-code-warning_svg__a"
      d="M23.049 20.686a1.774 1.774 0 01-1.586 2.568h-8.452a1.775 1.775 0 01-1.587-2.568l4.226-8.452a1.774 1.774 0 013.173 0zM8.237 20.254h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.439L16.8 4.064a1.5 1.5 0 01.44 1.061v3.129"
    />,
    <rect
      className="file-code-warning_svg__a"
      x={6.737}
      y={5.254}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-warning_svg__a"
      d="M3.737 5.254v4.5M12.737 5.254v4.5"
    />,
    <rect
      className="file-code-warning_svg__a"
      x={3.737}
      y={12.754}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeWarning;
