import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskBubble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-bubble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="mask-bubble_svg__a"
      x={1}
      y={1}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path
      className="mask-bubble_svg__a"
      d="M20 12a2.784 2.784 0 00-1.755-2.587 2.784 2.784 0 00-3.658-3.658 2.784 2.784 0 00-5.174 0 2.784 2.784 0 00-3.658 3.658 2.784 2.784 0 000 5.174 2.784 2.784 0 003.658 3.658 2.784 2.784 0 005.174 0 2.784 2.784 0 003.658-3.658A2.784 2.784 0 0020 12z"
    />
  );

export default SvgMaskBubble;
