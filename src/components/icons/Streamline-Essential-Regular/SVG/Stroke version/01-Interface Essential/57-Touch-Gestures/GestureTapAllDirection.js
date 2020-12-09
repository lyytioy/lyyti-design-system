import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapAllDirection = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-all-direction_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-all-direction_svg__a"
      d="M12.748 14.248h-1.5M8.248 17.248V13.5a3.75 3.75 0 017.5 0v3.75M14.248 2.998l-2.25-2.25-2.25 2.25M14.248 20.998l-2.25 2.25-2.25-2.25M2.998 9.748l-2.25 2.25 2.25 2.25M20.998 9.748l2.25 2.25-2.25 2.25M5.95 16.5a6.75 6.75 0 1112.1 0"
    />
  );

export default SvgGestureTapAllDirection;
