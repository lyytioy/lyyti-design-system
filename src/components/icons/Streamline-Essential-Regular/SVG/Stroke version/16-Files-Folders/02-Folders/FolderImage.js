import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-image_svg__a"
      d="M18.75 6.75v-1.5a1.5 1.5 0 00-1.5-1.5h-9v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v16.3"
    />,
    <path
      className="folder-image_svg__a"
      d="M3.75 20.25v-12a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.5 1.5v1.5"
    />,
    <rect
      className="folder-image_svg__a"
      x={6.75}
      y={9.75}
      width={16.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="folder-image_svg__a"
      d="M11.25 13.875a.375.375 0 11-.375.375.375.375 0 01.375-.375M20.25 20.25l-2.91-4.365a.75.75 0 00-1.24-.015l-2 2.851-1.236-.989a.751.751 0 00-1.093.17l-1.559 2.348"
    />
  );

export default SvgFolderImage;
