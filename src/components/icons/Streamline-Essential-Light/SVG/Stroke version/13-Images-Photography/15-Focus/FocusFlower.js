import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusFlower = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-flower_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="focus-flower_svg__a"
      d="M11.75 23.292v-9.5M20.25 14.792a8.5 8.5 0 00-8.5 8.5 8.5 8.5 0 008.5-8.5zM3.75 15.292a8 8 0 018 8 8 8 0 01-8-8zM18.75 6.792a7 7 0 01-14 0v-5.5c0-.55.318-.682.707-.293L8.25 3.792 11.043 1a1 1 0 011.414 0l2.793 2.792L18.043 1c.389-.389.707-.257.707.293z"
    />
  );

export default SvgFocusFlower;
