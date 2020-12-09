import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHardDrive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hard-drive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="hard-drive_svg__a"
      d="M18.375 17.625a.375.375 0 10.375.375.375.375 0 00-.375-.375M15 17.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="hard-drive_svg__a"
      d="M23.25 18a4.5 4.5 0 01-4.5 4.5H5.25a4.5 4.5 0 010-9h13.5a4.5 4.5 0 014.5 4.5z"
    />,
    <path
      className="hard-drive_svg__a"
      d="M23.131 16.973L20.043 3.815a3 3 0 00-2.92-2.315H6.878a3 3 0 00-2.921 2.315L.869 16.973M5.25 18H9"
    />
  );

export default SvgHardDrive;
