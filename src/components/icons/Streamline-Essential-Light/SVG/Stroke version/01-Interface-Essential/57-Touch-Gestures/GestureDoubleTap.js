import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureDoubleTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-double-tap_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-double-tap_svg__a"
      d="M6.477 15.449a6.5 6.5 0 1111.016.014M4.992 18.43a9.5 9.5 0 1114.02-.03"
    />,
    <path
      className="gesture-double-tap_svg__a"
      d="M10.486 11.5a1 1 0 012 0v4.754l3.92 1.17a1.28 1.28 0 01.893 1.519c-.13.564-.745 4-.849 4.576h-6.12l-3.061-4.585c-1.215-1.858 1.836-2.5 3.217.589z"
    />
  );

export default SvgGestureDoubleTap;
