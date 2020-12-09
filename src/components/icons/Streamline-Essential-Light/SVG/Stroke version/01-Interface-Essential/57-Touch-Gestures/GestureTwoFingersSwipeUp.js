import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingersSwipeUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-fingers-swipe-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-fingers-swipe-up_svg__a"
      d="M16.523 9.5a1 1 0 010 2h-4.754l-.246 1 4.816 1.5a.929.929 0 01-.454 1.8l-4.862-1.3c-.472 1.019-.776 2.079-1.944 1.809-.563-.13-4-.745-4.576-.849V9.343l4.59-3.061C10.951 5.067 11.6 8.118 8.5 9.5zM17.003 2.985l1-2.486 3 .486"
    />,
    <path
      className="gesture-two-fingers-swipe-up_svg__a"
      d="M18.064 23.5C19.851 20.848 21 16.677 21 11.985A21.085 21.085 0 0018 .5"
    />
  );

export default SvgGestureTwoFingersSwipeUp;
