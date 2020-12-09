import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikePlusOne = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-plus-one_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="like-plus-one_svg__a"
      x={0.75}
      y={1.5}
      width={22.5}
      height={21}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="like-plus-one_svg__a"
      d="M.75 6h22.5M9 11.25v6M6 14.25h6M15 9.75h1.5v9"
    />
  );

export default SvgLikePlusOne;
