import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphones = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="headphones_svg__a"
      d="M23.5 18.505v-6.5a11.5 11.5 0 00-23 0v6.5"
    />,
    <path
      className="headphones_svg__a"
      d="M7.5 23.182a.313.313 0 01-.333.312 5 5 0 01-.223-9.958.5.5 0 01.556.5zM16.5 23.149a.346.346 0 00.369.343 5 5 0 00.187-9.956.5.5 0 00-.556.5z"
    />
  );

export default SvgHeadphones;
