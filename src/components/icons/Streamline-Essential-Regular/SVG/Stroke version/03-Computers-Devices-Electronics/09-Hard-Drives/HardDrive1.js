import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHardDrive1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hard-drive-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="hard-drive-1_svg__a"
      d="M23.25 11.25H.75v6a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5zM2.25 18.75v1.5M21.75 18.75v1.5M18 3.75H6l-5.25 7.5h22.5L18 3.75zM3.75 15h3M15 14.625"
    />,
    <path
      className="hard-drive-1_svg__a"
      d="M15 14.625a.375.375 0 10.375.375.375.375 0 00-.375-.375M19.5 14.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgHardDrive1;
