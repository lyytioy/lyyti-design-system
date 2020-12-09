import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTyping = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".typing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="typing_svg__a"
      x={0.5}
      y={5.999}
      width={23}
      height={12}
      rx={1}
      ry={1}
    />,
    <path className="typing_svg__a" d="M4 8.999h2M4 14.999h2M5 14.999v-6" />
  );

export default SvgTyping;
