import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="love-it-lock_svg__a"
      d="M10.463 18.834l-8.051-8.4a5.673 5.673 0 01-1.063-6.548 5.672 5.672 0 019.085-1.473L12 3.978l1.566-1.565a5.672 5.672 0 019.085 1.473 5.675 5.675 0 01-.015 5.1"
    />,
    <rect
      className="love-it-lock_svg__a"
      x={14.247}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="love-it-lock_svg__a"
      d="M18.747 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.747 19.154a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgLoveItLock;
