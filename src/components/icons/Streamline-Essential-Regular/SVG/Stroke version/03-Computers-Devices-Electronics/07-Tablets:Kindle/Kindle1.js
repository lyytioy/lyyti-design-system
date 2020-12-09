import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKindle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".kindle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="kindle-1_svg__a"
      d="M5.266 18.75h13.5M8.266 5.25h7.5M8.266 8.25h7.5M8.266 11.25h3.75"
    />,
    <rect
      className="kindle-1_svg__a"
      x={5.247}
      y={0.75}
      width={13.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgKindle1;
