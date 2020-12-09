import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="file-code-upload_svg__a"
      cx={17.238}
      cy={17.254}
      r={6}
    />,
    <path
      className="file-code-upload_svg__a"
      d="M17.238 20.254v-6M17.238 14.254l-2.25 2.25M17.238 14.254l2.25 2.25M8.238 20.254h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.439L16.8 4.064a1.5 1.5 0 01.44 1.061v3.129"
    />,
    <rect
      className="file-code-upload_svg__a"
      x={6.738}
      y={5.254}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-upload_svg__a"
      d="M3.738 5.254v4.5M12.738 5.254v4.5"
    />,
    <rect
      className="file-code-upload_svg__a"
      x={3.738}
      y={12.754}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeUpload;
