import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureExpandTwoFingers = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-expand-two-fingers_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-expand-two-fingers_svg__a"
      d="M14.25 2.998L12 .748l-2.25 2.25M14.25 20.998L12 23.248l-2.25-2.25M3 9.748l-2.25 2.25L3 14.248M21 9.748l2.25 2.25-2.25 2.25M9.749 12.748a.375.375 0 11-.375.375.375.375 0 01.375-.375M14.625 11.248a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="gesture-expand-two-fingers_svg__a"
      d="M6.75 15.748v-3a3 3 0 016 0v3"
    />,
    <path
      className="gesture-expand-two-fingers_svg__a"
      d="M17.25 15.748v-4.875a2.625 2.625 0 00-5.248-.1"
    />
  );

export default SvgGestureExpandTwoFingers;
