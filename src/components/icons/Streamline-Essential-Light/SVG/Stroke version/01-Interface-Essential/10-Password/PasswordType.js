import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordType = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-type_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="password-type_svg__a"
      x={0.5}
      y={6.5}
      width={23}
      height={12}
      rx={2}
      ry={2}
    />,
    <path
      className="password-type_svg__a"
      d="M10.001 10.5l4 4M14.001 10.5l-4 4M3.501 10.5l4 4M7.501 10.5l-4 4M16.501 14.5h4"
    />
  );

export default SvgPasswordType;
