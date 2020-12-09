import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-lock_svg__a"
      d="M12 21.364L2.2 11.272a5.667 5.667 0 01-1.087-6.607A5.839 5.839 0 0110.4 3.178L12 4.637l1.6-1.459a5.84 5.84 0 019.287 1.487 5.659 5.659 0 01.192 4.7"
    />,
    <path
      className="love-it-lock_svg__a"
      d="M23.5 21.363a1 1 0 01-1 1h-7a1 1 0 01-1-1v-6a1 1 0 011-1h7a1 1 0 011 1z"
    />,
    <circle className="love-it-lock_svg__a" cx={19} cy={18.426} r={1.25} />,
    <path
      className="love-it-lock_svg__a"
      d="M21.5 12.863a2.5 2.5 0 00-5 0v1.5h5z"
    />
  );

export default SvgLoveItLock;
