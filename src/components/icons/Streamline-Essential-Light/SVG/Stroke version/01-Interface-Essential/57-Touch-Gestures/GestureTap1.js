import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTap1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-1_svg__a"
      d="M8.5 21.508v-9.5a3.5 3.5 0 017 0v9.5M6.486 15.453a6.5 6.5 0 1111.016.015M5 18.433a9.5 9.5 0 1114.02-.028"
    />,
    <path
      className="gesture-tap-1_svg__a"
      d="M13.5 12.008a1.5 1.5 0 00-3 0v1.5h3z"
    />
  );

export default SvgGestureTap1;
