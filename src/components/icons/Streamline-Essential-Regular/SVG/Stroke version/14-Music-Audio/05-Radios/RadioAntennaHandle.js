import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioAntennaHandle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radio-antenna-handle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="radio-antenna-handle_svg__a"
      d="M.75 12.75h22.5M4.124 9a.375.375 0 11-.374.376A.375.375 0 014.124 9M19.874 9a.375.375 0 11-.374.376.375.375 0 01.374-.376M15 9.75h1.5M7.5 9.75H12"
    />,
    <circle
      className="radio-antenna-handle_svg__a"
      cx={6}
      cy={17.25}
      r={2.25}
    />,
    <path
      className="radio-antenna-handle_svg__a"
      d="M12.75 15.75H18M12.75 18.75H18"
    />,
    <rect
      className="radio-antenna-handle_svg__a"
      x={0.75}
      y={6.75}
      width={22.5}
      height={15.75}
      rx={1}
      ry={1}
    />,
    <path
      className="radio-antenna-handle_svg__a"
      d="M21.75 6.75V4.5a3 3 0 00-3-3H5.25a3 3 0 00-3 3v2.25"
    />
  );

export default SvgRadioAntennaHandle;
