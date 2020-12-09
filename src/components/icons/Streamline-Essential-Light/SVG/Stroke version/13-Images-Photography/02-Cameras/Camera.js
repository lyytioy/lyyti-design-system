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
    <rect
      className="camera_svg__a"
      x={0.5}
      y={6}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="camera_svg__a"
      d="M3 6V5a1 1 0 011-1h2a1 1 0 011 1v1M.5 11H8M.5 13H8M.5 15H8"
    />,
    <circle className="camera_svg__a" cx={16.5} cy={13} r={5} />,
    <rect
      className="camera_svg__a"
      x={14.5}
      y={11}
      width={4}
      height={4}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgCamera;
