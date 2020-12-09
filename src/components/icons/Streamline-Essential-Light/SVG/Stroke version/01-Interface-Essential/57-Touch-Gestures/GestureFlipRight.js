import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureFlipRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-flip-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-flip-right_svg__a"
      d="M3.489 16.508v-4.5a3.5 3.5 0 017 0v4.5"
    />,
    <path
      className="gesture-flip-right_svg__a"
      d="M8.489 12.008a1.5 1.5 0 00-3 0v1.5h3zM12.489 16.508v-4.5a3.5 3.5 0 017 0v4.5"
    />,
    <path
      className="gesture-flip-right_svg__a"
      d="M17.489 12.008a1.5 1.5 0 00-3 0v1.5h3zM14.489.508l-3 1 1 2.5M8.489 23.508l3-1-1-2.5M6.975 18.008c1 2.718 2.645 4.5 4.514 4.5M16.173 6.5c-.969-2.995-2.7-4.991-4.684-4.991"
    />
  );

export default SvgGestureFlipRight;
