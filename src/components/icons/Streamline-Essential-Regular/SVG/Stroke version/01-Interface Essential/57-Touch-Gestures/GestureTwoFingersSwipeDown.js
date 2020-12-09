import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingersSwipeDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-fingers-swipe-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-fingers-swipe-down_svg__a"
      d="M.749 15.748l2.856.816a3 3 0 003.507-1.543l.387-.773h3.75a1.5 1.5 0 000-3h1.5a1.5 1.5 0 000-3H6l.587-1.174a1.637 1.637 0 00-2.744-1.755L.749 9.108M11.249 11.248h-4.5M23.249 23.248h-6v-6M19.87.748a18 18 0 01-1.206 22.5"
    />
  );

export default SvgGestureTwoFingersSwipeDown;
