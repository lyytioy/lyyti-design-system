import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIndentLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".indent-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="indent-left_svg__a"
      d="M20.5 19.498h-9M23.5 15.498h-12M20.5 11.498h-9M23.5 7.498h-12M20.5 3.498h-9M8.5 22.498v-21M4.5 8.498l2 3h-6M4.5 14.498l2-3"
    />
  );

export default SvgIndentLeft;
