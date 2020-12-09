import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTyping = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".typing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="typing_svg__a"
      x={0.75}
      y={5.249}
      width={22.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="typing_svg__a"
      d="M6.75 15.749v-7.5M5.25 8.249h3M5.25 15.749h3"
    />
  );

export default SvgTyping;
