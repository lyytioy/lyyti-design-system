import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="camera_svg__a" cx={8} cy={5.5} r={5} />,
    <circle className="camera_svg__a" cx={18} cy={7.5} r={3} />,
    <rect
      className="camera_svg__a"
      x={7}
      y={12.5}
      width={10}
      height={7}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="camera_svg__a"
      d="M20 17.306a.5.5 0 01-.658.475L17 17v-2l2.342-.781a.5.5 0 01.658.475zM8.5 23.5l4-4 4 4"
    />
  );

export default SvgCamera;
