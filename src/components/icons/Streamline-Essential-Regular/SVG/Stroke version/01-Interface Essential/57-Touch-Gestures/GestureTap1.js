import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTap1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-1_svg__a"
      d="M6.75 23.248V15a5.25 5.25 0 1110.5 0v8.25"
    />,
    <path
      className="gesture-tap-1_svg__a"
      d="M14.25 15.748v1.5h-4.5v-1.5M23.25 6.274a14.215 14.215 0 00-22.5 0M20.25 20.178a9.75 9.75 0 10-16.5 0"
    />
  );

export default SvgGestureTap1;
