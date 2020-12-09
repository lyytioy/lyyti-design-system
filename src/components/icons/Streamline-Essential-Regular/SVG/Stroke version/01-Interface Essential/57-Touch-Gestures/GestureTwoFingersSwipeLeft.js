import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingersSwipeLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-fingers-swipe-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-fingers-swipe-left_svg__a"
      d="M.75.748v6h6M23.25 4.128A18 18 0 00.75 5.333M18.749 23.248l.816-2.856a3 3 0 00-1.543-3.507l-.773-.387v-3.75a1.5 1.5 0 10-3 0v-1.5a1.5 1.5 0 00-3 0V18l-1.174-.587a1.638 1.638 0 00-1.755 2.742l3.789 3.093M14.249 12.748v4.5"
    />
  );

export default SvgGestureTwoFingersSwipeLeft;
