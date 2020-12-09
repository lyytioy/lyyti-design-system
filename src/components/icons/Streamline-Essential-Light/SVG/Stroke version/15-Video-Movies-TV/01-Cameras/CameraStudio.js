import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraStudio = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-studio_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="camera-studio_svg__a"
      x={1.5}
      y={12}
      width={16}
      height={10}
      rx={1}
      ry={1}
    />,
    <circle className="camera-studio_svg__a" cx={4.5} cy={6} r={4} />,
    <circle className="camera-studio_svg__a" cx={13} cy={7.5} r={2.5} />,
    <path
      className="camera-studio_svg__a"
      d="M17.5 18.5l5.077 2.115A.62.62 0 0023.5 20v-6a.62.62 0 00-.923-.615L17.5 15.5"
    />
  );

export default SvgCameraStudio;
