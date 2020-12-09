import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraProfessional = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-professional_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="camera-professional_svg__a"
      x={0.75}
      y={9}
      width={16.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="camera-professional_svg__a"
      d="M17.25 17.25l4.987 1.87a.75.75 0 001.013-.7v-6.838a.75.75 0 00-1.013-.7L17.25 12.75z"
    />,
    <circle
      className="camera-professional_svg__a"
      cx={5.625}
      cy={15.375}
      r={1.875}
    />,
    <circle
      className="camera-professional_svg__a"
      cx={12.375}
      cy={15.375}
      r={1.875}
    />,
    <path
      className="camera-professional_svg__a"
      d="M5.625 13.5h6.75M21.75 3H16.5a.75.75 0 00-.75.75v1.5a.75.75 0 00.75.75h5.25a1.5 1.5 0 000-3zM15.75 4.5h-1.5a1.5 1.5 0 00-1.5 1.5v3M1.5 6h6A1.5 1.5 0 019 7.5V9"
    />
  );

export default SvgCameraProfessional;
