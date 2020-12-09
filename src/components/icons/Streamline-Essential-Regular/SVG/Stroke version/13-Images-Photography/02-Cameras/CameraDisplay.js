import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraDisplay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-display_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-display_svg__a"
      d="M19.5 6l-1.085-2.171A1.5 1.5 0 0017.073 3h-5.646a1.5 1.5 0 00-1.342.829L9 6H2.25a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5z"
    />,
    <rect
      className="camera-display_svg__a"
      x={3.75}
      y={10.5}
      width={9}
      height={7.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="camera-display_svg__a"
      d="M18 12h1.5M18 16.5h1.5M5.25 6V4.5"
    />
  );

export default SvgCameraDisplay;
