import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapSwipeVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-swipe-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-swipe-vertical_svg__a"
      d="M14.489.506v3M11.989 2.506l2.5-2 2.5 2M14.489 23.506v-3M11.989 21.506l2.5 2 2.5-2M10.544 6.493a6.5 6.5 0 11-.015 11.015"
    />,
    <path
      className="gesture-tap-swipe-vertical_svg__a"
      d="M4.489 8.506h9.5a3.5 3.5 0 010 7h-9.5"
    />,
    <path
      className="gesture-tap-swipe-vertical_svg__a"
      d="M13.989 13.506a1.5 1.5 0 000-3h-1.5v3z"
    />
  );

export default SvgGestureTapSwipeVertical;
