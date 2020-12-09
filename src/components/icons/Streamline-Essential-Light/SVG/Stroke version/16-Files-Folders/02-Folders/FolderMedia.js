import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderMedia = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-media_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-media_svg__a"
      d="M22 4.5H9a1 1 0 01-.72-.306L6.938 2.806a1 1 0 00-.72-.306H2.786A1.286 1.286 0 001.5 3.786V15.5"
    />,
    <rect
      className="folder-media_svg__a"
      x={4.5}
      y={7.5}
      width={18}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="folder-media_svg__a"
      d="M10.5 11.716a.716.716 0 011.085-.614l5.567 3.034a.716.716 0 010 1.228L11.585 18.4a.716.716 0 01-1.085-.614z"
    />
  );

export default SvgFolderMedia;
