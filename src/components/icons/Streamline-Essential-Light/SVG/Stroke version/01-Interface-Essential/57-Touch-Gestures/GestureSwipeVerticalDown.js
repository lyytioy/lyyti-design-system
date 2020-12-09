import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureSwipeVerticalDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-swipe-vertical-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-swipe-vertical-down_svg__a"
      d="M12.493 20.53l.5 2.976 3-.494M5.493 8.524h9.5a3.5 3.5 0 010 7h-9.5"
    />,
    <path
      className="gesture-swipe-vertical-down_svg__a"
      d="M14.993 13.524a1.5 1.5 0 000-3h-1.5v3zM15.9 6.493A11.922 11.922 0 0013.013.524M13.008 23.477a11.631 11.631 0 002.9-5.941"
    />
  );

export default SvgGestureSwipeVerticalDown;
