import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="touch-up_svg__a"
      d="M12.001 14.248v-10.5M9.001 6.748l3-3 3 3M16.243 10.006a6 6 0 11-8.485 0"
    />
  );

export default SvgTouchUp;
