import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapSwipeHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-swipe-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-swipe-horizontal_svg__a"
      d="M.49 11.506h3M2.49 14.006l-2-2.5 2-2.5M23.49 11.506h-3M21.49 14.006l2-2.5-2-2.5M6.478 15.452a6.5 6.5 0 1111.016.014"
    />,
    <path
      className="gesture-tap-swipe-horizontal_svg__a"
      d="M8.49 21.506v-9.5a3.5 3.5 0 017 0v9.5"
    />,
    <path
      className="gesture-tap-swipe-horizontal_svg__a"
      d="M13.49 12.006a1.5 1.5 0 00-3 0v1.5h3z"
    />
  );

export default SvgGestureTapSwipeHorizontal;
