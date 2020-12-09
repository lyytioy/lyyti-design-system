import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingersSwipeUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-fingers-swipe-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-fingers-swipe-up_svg__a"
      d="M.749 18.748l2.856.816a3 3 0 003.508-1.543l.386-.773h3.75a1.5 1.5 0 000-3h1.5a1.5 1.5 0 000-3H6l.588-1.174a1.638 1.638 0 00-2.745-1.755L.749 12.108M11.249 14.248h-4.5M23.249.748h-6v6M19.87 23.248a18 18 0 00-1.206-22.5"
    />
  );

export default SvgGestureTwoFingersSwipeUp;
