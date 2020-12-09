import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScaleHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scale-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="scale-horizontal_svg__a"
      d="M4.5 3.5v-2a1 1 0 011-1h12a1 1 0 011 1v2M11.5.498v16M8 16.498h7M.5 20.498h22M4.5 23.498l-4-3.015 4-2.985M18.5 23.498l4-3.015-4-2.985"
    />
  );

export default SvgScaleHorizontal;
