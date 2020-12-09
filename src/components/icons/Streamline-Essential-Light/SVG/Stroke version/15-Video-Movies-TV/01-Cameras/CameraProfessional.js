import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraProfessional = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-professional_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="camera-professional_svg__a"
      x={1.5}
      y={9.5}
      width={16}
      height={10}
      rx={1}
      ry={1}
    />,
    <circle className="camera-professional_svg__a" cx={6} cy={14} r={1.5} />,
    <circle className="camera-professional_svg__a" cx={13} cy={14} r={1.5} />,
    <path
      className="camera-professional_svg__a"
      d="M6 12.5h7M.5 6.5h10a1 1 0 011 1v2M15.5 9.5v-3a1 1 0 011-1h2"
    />,
    <path
      className="camera-professional_svg__a"
      d="M23.5 5.5a1 1 0 01-1 1h-3a1 1 0 010-2h3a1 1 0 011 1zM17.5 13l5.255-2.189a.538.538 0 01.745.5v6.384a.539.539 0 01-.745.5L17.5 16"
    />
  );

export default SvgCameraProfessional;
