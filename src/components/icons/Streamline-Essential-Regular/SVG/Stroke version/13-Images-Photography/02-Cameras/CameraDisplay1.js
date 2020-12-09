import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraDisplay1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-display-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-display-1_svg__a"
      d="M4.125 11.625A.375.375 0 113.75 12a.375.375 0 01.375-.375M4.125 15.375a.375.375 0 11-.375.375.375.375 0 01.375-.375M19.5 10.125l.75-.75M19.5 13.875l.75-.75M19.5 17.625l.75-.75"
    />,
    <path
      className="camera-display-1_svg__a"
      d="M16.031 6.375a1.5 1.5 0 01-1.393-.943l-.745-1.864a1.5 1.5 0 00-1.393-.943H7.766a1.5 1.5 0 00-1.393.943l-.746 1.864a1.5 1.5 0 01-1.393.943H2.25a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5z"
    />,
    <rect
      className="camera-display-1_svg__a"
      x={7.5}
      y={9.375}
      width={9}
      height={8.25}
      rx={0.5}
      ry={0.5}
    />,
    <path className="camera-display-1_svg__a" d="M19.5 4v2.375" />
  );

export default SvgCameraDisplay1;
