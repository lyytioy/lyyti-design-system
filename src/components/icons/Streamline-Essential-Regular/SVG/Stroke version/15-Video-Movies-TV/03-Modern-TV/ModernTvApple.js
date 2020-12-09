import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvApple = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-apple_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="modern-tv-apple_svg__a"
      d="M.75 12.709v6.041a4.5 4.5 0 004.5 4.5h13.5a4.5 4.5 0 004.5-4.5v-6.041"
    />,
    <path
      className="modern-tv-apple_svg__a"
      d="M18.574.75H5.426a3.041 3.041 0 00-2.992 2.5L.825 11.873a4.561 4.561 0 004.487 5.377h13.376a4.561 4.561 0 004.487-5.377l-1.609-8.626A3.041 3.041 0 0018.574.75zM9 12.75v-7.5M7.5 5.25h3"
    />,
    <path
      className="modern-tv-apple_svg__a"
      d="M13.5 5.25V7.8a8.932 8.932 0 001.5 4.95 8.932 8.932 0 001.5-4.95V5.25"
    />
  );

export default SvgModernTvApple;
