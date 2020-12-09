import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskBubble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-bubble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="mask-bubble_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1}
      ry={1}
    />,
    <path
      className="mask-bubble_svg__a"
      d="M19.5 12a2.61 2.61 0 00-1.645-2.425 2.611 2.611 0 00-3.43-3.43 2.61 2.61 0 00-4.85 0 2.611 2.611 0 00-3.43 3.43 2.61 2.61 0 000 4.85 2.611 2.611 0 003.43 3.43 2.61 2.61 0 004.85 0 2.611 2.611 0 003.43-3.43A2.61 2.61 0 0019.5 12z"
    />
  );

export default SvgMaskBubble;
