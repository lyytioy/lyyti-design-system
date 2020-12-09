import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusEye = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-eye_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="focus-eye_svg__a"
      d="M4.5 12s3-4.5 7.5-4.5 7.5 4.5 7.5 4.5-3 4.5-7.5 4.5S4.5 12 4.5 12z"
    />,
    <rect
      className="focus-eye_svg__a"
      x={10.125}
      y={10.125}
      width={3.75}
      height={3.75}
      rx={1.875}
      ry={1.875}
    />,
    <path
      className="focus-eye_svg__a"
      d="M.75 4.5V2.25a1.5 1.5 0 011.5-1.5H4.5M23.25 4.5V2.25a1.5 1.5 0 00-1.5-1.5H19.5M.75 19.5v2.25a1.5 1.5 0 001.5 1.5H4.5M23.25 19.5v2.25a1.5 1.5 0 01-1.5 1.5H19.5"
    />
  );

export default SvgFocusEye;
