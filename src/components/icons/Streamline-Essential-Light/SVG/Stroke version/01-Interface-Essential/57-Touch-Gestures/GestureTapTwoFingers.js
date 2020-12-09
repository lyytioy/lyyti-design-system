import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapTwoFingers = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-two-fingers_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-two-fingers_svg__a"
      d="M5.5 21.508v-9.5a3.5 3.5 0 017 0v9.5"
    />,
    <path
      className="gesture-tap-two-fingers_svg__a"
      d="M10.5 12.008a1.5 1.5 0 00-3 0v1.5h3zM12.5 21.508v-10.5a3.5 3.5 0 117 0v10.5"
    />,
    <path
      className="gesture-tap-two-fingers_svg__a"
      d="M17.5 11.008a1.5 1.5 0 10-3 0v1.5h3zM3.524 11.8a5.255 5.255 0 017.47-5.283M13.008 5.889a5.507 5.507 0 018.287 6.1"
    />
  );

export default SvgGestureTapTwoFingers;
