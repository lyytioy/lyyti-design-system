import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingersSwipeDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-fingers-swipe-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-fingers-swipe-down_svg__a"
      d="M15.522 9.5a1 1 0 010 2h-4.754l-.246 1 4.816 1.5a.929.929 0 01-.454 1.8l-4.862-1.3c-.472 1.019-.776 2.079-1.944 1.809-.563-.13-4-.745-4.576-.849V9.343l4.59-3.061c1.857-1.215 2.5 1.836-.59 3.217zM16.002 21.011l1 2.488 3-.488"
    />,
    <path
      className="gesture-two-fingers-swipe-down_svg__a"
      d="M17.063.5C18.85 3.149 20 7.319 20 12.011A21.1 21.1 0 0117 23.5"
    />
  );

export default SvgGestureTwoFingersSwipeDown;
