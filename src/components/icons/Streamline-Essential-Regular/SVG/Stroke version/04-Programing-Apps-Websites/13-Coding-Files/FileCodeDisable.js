import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="file-code-disable_svg__a"
      cx={17.252}
      cy={17.253}
      r={6}
    />,
    <path
      className="file-code-disable_svg__a"
      d="M13.01 21.495l8.484-8.484M8.252 20.253h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061v3.128"
    />,
    <rect
      className="file-code-disable_svg__a"
      x={6.752}
      y={5.253}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-disable_svg__a"
      d="M3.752 5.253v4.5M12.752 5.253v4.5"
    />,
    <rect
      className="file-code-disable_svg__a"
      x={3.752}
      y={12.753}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeDisable;
