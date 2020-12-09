import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapExpandAllDirection = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-expand-all-direction_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-expand-all-direction_svg__a"
      d="M14.999 3.748l-3-3-3 3M14.999 20.248l-3 3-3-3M3.749 8.998l-3 3 3 3M20.249 8.998l3 3-3 3M9.749 15.748a2.25 2.25 0 010-4.5v-3a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5V10.5l.727.182a3 3 0 012.272 2.911v2.157M17.249 19.3a9.085 9.085 0 002.041-2.05M19.29 6.748A9.106 9.106 0 0017.249 4.7M4.709 17.248a9.06 9.06 0 002.04 2.05M6.749 4.7a9.081 9.081 0 00-2.04 2.05"
    />
  );

export default SvgGestureTapExpandAllDirection;
