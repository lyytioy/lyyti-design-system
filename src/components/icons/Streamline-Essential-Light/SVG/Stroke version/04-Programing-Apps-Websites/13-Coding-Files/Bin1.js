import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBin1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bin-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="bin-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="bin-1_svg__a"
      d="M12 11.504v8M10 19.504h4M10 11.504h4M8 13.5a2 2 0 01-2 2H4v-4h2a2 2 0 012 2zM8 17.5a2 2 0 01-2 2H4v-4h2a2 2 0 012 2zM16 19.504v-8l4 8v-8"
    />
  );

export default SvgBin1;
