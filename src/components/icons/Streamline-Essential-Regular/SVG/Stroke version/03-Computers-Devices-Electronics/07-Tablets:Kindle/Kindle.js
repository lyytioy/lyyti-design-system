import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKindle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".kindle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="kindle_svg__a" d="M7.497 6h9M7.497 9h9M7.497 12h5.25" />,
    <rect
      className="kindle_svg__a"
      x={2.997}
      y={0.75}
      width={18}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="kindle_svg__a" d="M2.997 18.75h18" />
  );

export default SvgKindle;
