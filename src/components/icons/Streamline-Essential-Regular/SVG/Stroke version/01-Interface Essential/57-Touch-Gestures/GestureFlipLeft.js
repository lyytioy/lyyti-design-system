import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureFlipLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-flip-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-flip-left_svg__a"
      d="M3.939 11.964l1.461-.341M9.1 14.257l-.945-4.046a3.75 3.75 0 00-7.3 1.705L2.618 19.5M20.057 11.964l-1.461-.341M21.378 19.5l1.771-7.582a3.75 3.75 0 00-7.3-1.7l-.949 4.026M10.784 17.272l-2.722 3.254 3.253 2.722M8.077 20.507a26.961 26.961 0 009.171-1.407M13.088 6.748l3.406-2.529L13.965.813M16.481 4.235a26.95 26.95 0 00-9.253-.767"
    />
  );

export default SvgGestureFlipLeft;
