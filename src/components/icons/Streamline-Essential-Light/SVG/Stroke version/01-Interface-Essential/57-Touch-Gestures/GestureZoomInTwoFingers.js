import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureZoomInTwoFingers = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-zoom-in-two-fingers_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-zoom-in-two-fingers_svg__a"
      d="M.498 11.504l2.002.004M2.498 14.004l-2-2.5 2-2.5M22.498 11.504l-1.998.004M20.498 14.004l2-2.5-2-2.5M4.5 15.5V11a3.5 3.5 0 117 0v4.5"
    />,
    <path
      className="gesture-zoom-in-two-fingers_svg__a"
      d="M9.5 11a1.5 1.5 0 10-3 0v1.5h3zM11.5 15.5V11a3.5 3.5 0 017 0v4.5"
    />,
    <path
      className="gesture-zoom-in-two-fingers_svg__a"
      d="M16.5 11a1.5 1.5 0 00-3 0v1.5h3z"
    />
  );

export default SvgGestureZoomInTwoFingers;
