import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchUp1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-up-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touch-up-1_svg__a"
      d="M12 10.499v-9M9 4.544l3-3 3 3M15 7.044a8.5 8.5 0 11-6 0"
    />
  );

export default SvgTouchUp1;
