import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordType = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-type_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="password-type_svg__a" d="M17.25 14.25h3" />,
    <rect
      className="password-type_svg__a"
      x={0.75}
      y={6.75}
      width={22.5}
      height={10.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="password-type_svg__a"
      d="M7.5 10.5l-3.75 3.75M7.5 14.25L3.75 10.5M14.25 10.5l-3.75 3.75M14.25 14.25L10.5 10.5"
    />
  );

export default SvgPasswordType;
