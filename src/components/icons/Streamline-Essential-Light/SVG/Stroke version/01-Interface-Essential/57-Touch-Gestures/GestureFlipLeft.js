import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureFlipLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-flip-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-flip-left_svg__a"
      d="M3.49 16.508v-4.5a3.5 3.5 0 017 0v4.5"
    />,
    <path
      className="gesture-flip-left_svg__a"
      d="M8.49 12.008a1.5 1.5 0 00-3 0v1.5h3zM12.49 16.508v-4.5a3.5 3.5 0 117 0v4.5"
    />,
    <path
      className="gesture-flip-left_svg__a"
      d="M17.49 12.008a1.5 1.5 0 10-3 0v1.5h3zM8.49.508l3 1-1 2.5M14.49 23.508l-3-1 1-2.5M16.005 18.008c-.994 2.718-2.646 4.5-4.515 4.5M6.808 6.5c.968-2.995 2.7-4.991 4.682-4.991"
    />
  );

export default SvgGestureFlipLeft;
