import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHammer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hammer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="hammer_svg__a"
      d="M14.015 13.166l-9.646 9.646a1.5 1.5 0 01-2.121 0l-1.061-1.061a1.5 1.5 0 010-2.121l9.646-9.646"
    />,
    <rect
      className="hammer_svg__a"
      x={11.152}
      y={1.004}
      width={8.686}
      height={15}
      rx={1.5}
      ry={1.5}
      transform="rotate(-44.999 15.495 8.504)"
    />
  );

export default SvgHammer;
