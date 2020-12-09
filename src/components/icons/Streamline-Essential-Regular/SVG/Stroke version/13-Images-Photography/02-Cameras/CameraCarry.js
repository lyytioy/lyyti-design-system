import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraCarry = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-carry_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-carry_svg__a"
      d="M18 23.25h3.75a1.5 1.5 0 001.5-1.5V12a1.5 1.5 0 00-1.494-1.5H15.8l-1.2-2.461a.959.959 0 00-.862-.539h-3.7a.96.96 0 00-.862.539L7.973 10.5H2.25A1.5 1.5 0 00.75 12v9.751a1.5 1.5 0 001.5 1.5h3.812M10.875 10.5h2.25"
    />,
    <path
      className="camera-carry_svg__a"
      d="M2.736 10.5l8.488-9.4a1.044 1.044 0 011.551 0l8.488 9.4"
    />,
    <circle className="camera-carry_svg__a" cx={12} cy={18.375} r={4.875} />
  );

export default SvgCameraCarry;
