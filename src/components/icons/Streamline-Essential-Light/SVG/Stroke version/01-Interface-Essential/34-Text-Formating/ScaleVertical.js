import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScaleVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scale-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="scale-vertical_svg__a"
      d="M.5 8.5v-2a1 1 0 011-1h12a1 1 0 011 1v2M7.5 5.498v16M4 21.498h7M20.5 1.498v22M17.5 5.498l3-4 3 4M17.5 19.498l3 4 3-4"
    />
  );

export default SvgScaleVertical;
