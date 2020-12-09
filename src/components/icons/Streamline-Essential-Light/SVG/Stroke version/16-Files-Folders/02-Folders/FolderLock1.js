import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderLock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-lock-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-lock-1_svg__a"
      d="M11.736 5a1 1 0 01-.894-.553l-.948-1.894A1 1 0 009 2H1.5a1 1 0 00-1 1v18a1 1 0 001 1h21a1 1 0 001-1V6a1 1 0 00-1-1z"
    />,
    <rect
      className="folder-lock-1_svg__a"
      x={7.5}
      y={12}
      width={9}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="folder-lock-1_svg__a"
      d="M12 14.5a1 1 0 101 1 1 1 0 00-1-1zM9.5 12v-1.5a2.5 2.5 0 015 0V12"
    />
  );

export default SvgFolderLock1;
