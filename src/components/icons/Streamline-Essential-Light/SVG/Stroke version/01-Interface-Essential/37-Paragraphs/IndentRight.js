import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIndentRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".indent-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="indent-right_svg__a"
      d="M3.5 19.498h9M.5 15.498h12M3.5 11.498h9M.5 7.498h12M3.5 3.498h9M15.5 22.498v-21M19.5 8.498l-2 3h6M19.5 14.498l-2-3"
    />
  );

export default SvgIndentRight;
