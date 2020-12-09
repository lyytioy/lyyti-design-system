import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgForceTouchPress = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".force-touch-press_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="force-touch-press_svg__a"
      d="M12 .75L5.611 8.774a1.5 1.5 0 102.277 1.952l5.362-6.009a1.966 1.966 0 012.244-.345 1.964 1.964 0 01.878 2.635l-.341.5a1.582 1.582 0 00.6 2.312 1.583 1.583 0 002.1-.665L23.25.75M14.249 20.25h6a3 3 0 003-3 1.5 1.5 0 00-1.5-1.5H2.25a1.5 1.5 0 00-1.5 1.5 3 3 0 003 3M15.75 15.75v4.5M.75 12.75H3M3 9L1.5 7.5M12.75 12.75H10.5M6.75 21L9 23.25 11.25 21M9 23.25v-4.5"
    />
  );

export default SvgForceTouchPress;
