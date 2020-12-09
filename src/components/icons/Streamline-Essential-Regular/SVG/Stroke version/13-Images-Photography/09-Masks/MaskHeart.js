import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="mask-heart_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1}
      ry={1}
    />,
    <path
      className="mask-heart_svg__a"
      d="M12 19.5l-7.031-7.616A4.442 4.442 0 014.19 6.9a4.08 4.08 0 016.66-1.122L12 6.971l1.148-1.192A4.079 4.079 0 0119.805 6.9a4.438 4.438 0 01-.779 4.983z"
    />
  );

export default SvgMaskHeart;
