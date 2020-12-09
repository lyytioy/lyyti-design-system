import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingersSwipeRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-fingers-swipe-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-fingers-swipe-right_svg__a"
      d="M21.013 8.008l2.487-1-.487-3"
    />,
    <path
      className="gesture-two-fingers-swipe-right_svg__a"
      d="M.5 6.947C3.15 5.16 7.321 4.008 12.013 4.008a21.091 21.091 0 0111.487 3M9.5 8.5a1 1 0 012 0v4.754l1 .246L14 8.683a.929.929 0 011.8.454L14.5 14c1.019.472 2.08.776 1.81 1.944-.13.563-.746 4-.849 4.576H9.34l-3.06-4.59c-1.215-1.857 1.836-2.5 3.217.59z"
    />
  );

export default SvgGestureTwoFingersSwipeRight;
