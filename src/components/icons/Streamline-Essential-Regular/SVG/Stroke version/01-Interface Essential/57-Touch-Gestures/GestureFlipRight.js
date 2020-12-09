import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureFlipRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-flip-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-flip-right_svg__a"
      d="M3.939 11.964l1.461-.341M9.1 14.257l-.95-4.046a3.75 3.75 0 10-7.3 1.705L2.618 19.5M20.057 11.964l-1.461-.341M21.378 19.5l1.771-7.582a3.75 3.75 0 00-7.3-1.7l-.949 4.026M13.691 17.272l2.723 3.254-3.254 2.722M16.4 20.507A26.959 26.959 0 017.227 19.1M11.387 6.748L7.981 4.219 10.51.813M8 4.234a26.944 26.944 0 019.248-.766"
    />
  );

export default SvgGestureFlipRight;
