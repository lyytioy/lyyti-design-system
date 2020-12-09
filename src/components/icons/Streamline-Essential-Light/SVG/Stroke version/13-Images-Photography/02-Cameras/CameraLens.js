import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraLens = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-lens_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-lens_svg__a"
      d="M18.5 7a2 2 0 01-2 2h-8a2 2 0 01-2-2V3a1 1 0 011-1h10a1 1 0 011 1z"
    />,
    <rect
      className="camera-lens_svg__a"
      x={8.5}
      y={12}
      width={8}
      height={10}
      rx={1}
      ry={1}
    />,
    <circle className="camera-lens_svg__a" cx={4.5} cy={17} r={2} />,
    <path
      className="camera-lens_svg__a"
      d="M10.5 18l1-3h2l1 3M8.5 4v3M10.5 4v3M12.5 4v3M14.5 4v3M16.5 4v3M9.5 9v3M15.5 9v3"
    />,
    <rect
      className="camera-lens_svg__a"
      x={18.5}
      y={16}
      width={3}
      height={2}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="camera-lens_svg__a"
      d="M16.5 13h4a3.009 3.009 0 013 3v2a3.009 3.009 0 01-3 3h-4M8.5 21h-5a3.009 3.009 0 01-3-3v-2a3.009 3.009 0 013-3h5"
    />
  );

export default SvgCameraLens;
