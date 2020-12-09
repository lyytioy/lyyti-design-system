import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusFlower = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-flower_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="focus-flower_svg__a"
      d="M12 13.494v9.75M4.5 15.744a7.5 7.5 0 017.5 7.5 7.5 7.5 0 01-7.5-7.5zM19.5 15.744a7.5 7.5 0 00-7.5 7.5 7.5 7.5 0 007.5-7.5zM4.5 5.994V2.335A.75.75 0 015.86 1.9L9 5.244l2.349-4.11a.75.75 0 011.3 0L15 5.244 18.14 1.9a.75.75 0 011.36.436v3.658a7.5 7.5 0 01-15 0z"
    />
  );

export default SvgFocusFlower;
