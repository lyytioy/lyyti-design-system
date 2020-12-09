import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-triangle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mask-triangle_svg__a"
      d="M19.449 19.032c.129.257 0 .468-.277.468H4.828c-.282 0-.406-.211-.277-.468l7.214-14.339c.129-.257.341-.257.47 0z"
    />,
    <rect
      className="mask-triangle_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1}
      ry={1}
    />
  );

export default SvgMaskTriangle;
