import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureExpandTwoFingers = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-expand-two-fingers_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-expand-two-fingers_svg__a"
      d="M11.499 1.004v4.5M8.999 3.004l2.5-2 2.5 2M11.499 23.504v-4.5M8.999 21.504l2.5 2 2.5-2M.499 12.504l2.001.004M2.499 15.004l-2-2.5 2-2.5M22.499 12.504l-1.999.004M20.499 15.004l2-2.5-2-2.5M4.5 16.5V12a3.5 3.5 0 017 0v4.5"
    />,
    <path
      className="gesture-expand-two-fingers_svg__a"
      d="M9.5 12a1.5 1.5 0 00-3 0v1.5h3zM11.5 16.5V12a3.5 3.5 0 117 0v4.5"
    />,
    <path
      className="gesture-expand-two-fingers_svg__a"
      d="M16.5 12a1.5 1.5 0 10-3 0v1.5h3z"
    />
  );

export default SvgGestureExpandTwoFingers;
