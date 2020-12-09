import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingersSwipeLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-fingers-swipe-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-fingers-swipe-left_svg__a"
      d="M9.5 8.5a1 1 0 012 0v4.754l1 .246L14 8.683a.929.929 0 011.8.454L14.5 14c1.019.472 2.079.776 1.809 1.944-.13.563-.745 4-.849 4.576H9.34l-3.06-4.59c-1.215-1.857 1.836-2.5 3.217.59zM2.987 8.008l-2.487-1 .487-3"
    />,
    <path
      className="gesture-two-fingers-swipe-left_svg__a"
      d="M23.5 6.947c-2.65-1.787-6.821-2.939-11.513-2.939a21.091 21.091 0 00-11.487 3"
    />
  );

export default SvgGestureTwoFingersSwipeLeft;
