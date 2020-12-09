import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="vintage-camera_svg__a"
      x={2.5}
      y={3.5}
      width={15}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="vintage-camera_svg__a"
      d="M6 3.5l1.224-2.447A1 1 0 018.118.5h3.764a1 1 0 01.894.553L14 3.5"
    />,
    <circle className="vintage-camera_svg__a" cx={10} cy={8} r={2.5} />,
    <circle className="vintage-camera_svg__a" cx={10} cy={17} r={4.5} />,
    <path
      className="vintage-camera_svg__a"
      d="M4.5 21.5h1M.5 6.5v2M.5 7.5h2M7.616 16.244a2.508 2.508 0 011.511-1.587M19.5 19.5h1a1 1 0 001-1V13M21.5 11.5v2h1a1 1 0 000-2zM17.5 17.5h1a1 1 0 011 1v2a1 1 0 01-1 1h-1"
    />
  );

export default SvgVintageCamera;
