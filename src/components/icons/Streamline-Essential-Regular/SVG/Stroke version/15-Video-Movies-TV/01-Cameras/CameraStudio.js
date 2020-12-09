import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraStudio = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-studio_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="camera-studio_svg__a"
      x={0.75}
      y={12}
      width={16.5}
      height={10.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="camera-studio_svg__a"
      d="M17.25 19.832l4.987 1.87A.75.75 0 0023.25 21v-6.836a.749.749 0 00-1.013-.7l-4.987 1.87zM4.5 15h8.25"
    />,
    <circle className="camera-studio_svg__a" cx={4.5} cy={5.25} r={3.75} />,
    <circle className="camera-studio_svg__a" cx={14.25} cy={6} r={3} />
  );

export default SvgCameraStudio;
