import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-triangle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="mask-triangle_svg__a"
      x={1}
      y={1}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path
      className="mask-triangle_svg__a"
      d="M19.27 18.556A.28.28 0 0119 19H5a.28.28 0 01-.27-.444l7.04-13.612c.127-.244.333-.244.46 0z"
    />
  );

export default SvgMaskTriangle;
