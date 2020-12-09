import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-heart_svg__a"
      d="M22.371 19.228A1.226 1.226 0 0121.273 21H2.727a1.225 1.225 0 01-1.1-1.775L3 15h18zM19.5 3A1.5 1.5 0 0121 4.5V15H3.006V4.5a1.5 1.5 0 011.5-1.5M11.25 18.001h1.5"
    />,
    <path
      className="laptop-heart_svg__a"
      d="M12 12L7.617 7.431a2.6 2.6 0 01-.486-2.994 2.594 2.594 0 014.153-.674l.716.716.716-.716a2.594 2.594 0 014.153.674 2.593 2.593 0 01-.486 2.994z"
    />
  );

export default SvgLaptopHeart;
