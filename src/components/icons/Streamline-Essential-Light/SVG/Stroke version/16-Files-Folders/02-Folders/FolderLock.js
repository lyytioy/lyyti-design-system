import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-lock_svg__a"
      d="M20.5 8.5v-4a1 1 0 00-1-1H9.618a1 1 0 01-.894-.553l-.948-1.894A1 1 0 006.882.5H1.5a1 1 0 00-1 1v15a1 1 0 001 1h10"
    />,
    <rect
      className="folder-lock_svg__a"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="folder-lock_svg__a" cx={19} cy={19.563} r={1.25} />,
    <path className="folder-lock_svg__a" d="M21.5 14a2.5 2.5 0 00-5 0v1.5h5z" />
  );

export default SvgFolderLock;
