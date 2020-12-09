import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraDisplay1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-display-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-display-1_svg__a"
      d="M.5 19.25a2 2 0 002 2h19a2 2 0 002-2V8.229a1.982 1.982 0 00-2-1.979h-4.991a2.02 2.02 0 01-1.676-.93l-.77-1.661a2 2 0 00-1.676-.909h-3.84a2 2 0 00-1.668.9l-.8 1.685a2.02 2.02 0 01-1.669.918H2.5a1.983 1.983 0 00-2 1.979z"
    />,
    <rect
      className="camera-display-1_svg__a"
      x={6.5}
      y={9.229}
      width={9}
      height={9.021}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="camera-display-1_svg__a"
      d="M4.094 11.26L2.625 9.791M4.094 14.26l-1.469-1.469M4.094 17.26l-1.469-1.469M21.5 13.75h-4M19.5 11.75v3.984M17.509 6.234V5.25a1 1 0 011-1h1a1 1 0 011 1v1"
    />
  );

export default SvgCameraDisplay1;
