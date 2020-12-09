import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhp1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".php-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="php-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="php-1_svg__a"
      d="M20.5 13.5a2 2 0 01-2 2h-2v-4h2a2 2 0 012 2zM16.5 19.504v-4M8.5 13.5a2 2 0 01-2 2h-2v-4h2a2 2 0 012 2zM4.5 19.504v-4M14.5 11.504v8M10.5 19.504v-8M10.5 15.504h4"
    />
  );

export default SvgPhp1;
