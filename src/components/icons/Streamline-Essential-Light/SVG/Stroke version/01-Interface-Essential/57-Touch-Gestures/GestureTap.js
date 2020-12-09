import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap_svg__a"
      d="M8.5 19.508v-9.5a3.5 3.5 0 017 0v9.5M6.487 13.453a6.5 6.5 0 1111.016.015"
    />,
    <path
      className="gesture-tap_svg__a"
      d="M13.5 10.008a1.5 1.5 0 00-3 0v1.5h3z"
    />
  );

export default SvgGestureTap;
