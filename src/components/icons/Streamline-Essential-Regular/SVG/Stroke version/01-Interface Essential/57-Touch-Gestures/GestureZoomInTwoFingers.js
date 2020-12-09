import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureZoomInTwoFingers = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-zoom-in-two-fingers_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-zoom-in-two-fingers_svg__a"
      d="M4.5 1.498L.75 5.248l3.75 3.75M.75 5.248h22.5M19.5 1.498l3.75 3.75-3.75 3.75M8.25 17.248h-1.5M3.75 23.248V16.5a3.75 3.75 0 017.5 0v6.75M15.75 15.748h-1.5"
    />,
    <path
      className="gesture-zoom-in-two-fingers_svg__a"
      d="M11.25 23.248V15a3.75 3.75 0 117.5 0v8.25"
    />
  );

export default SvgGestureZoomInTwoFingers;
