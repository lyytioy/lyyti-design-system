import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAndroid1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".android-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="android-1_svg__a"
      d="M18.75 23.253H5.25a1.5 1.5 0 01-1.5-1.5v-10.5h16.5v10.5a1.5 1.5 0 01-1.5 1.5zM20.25 10.5a8.25 8.25 0 00-16.5 0v.75h16.5z"
    />,
    <path
      className="android-1_svg__a"
      d="M8.625 6.753a.375.375 0 11-.375.375.375.375 0 01.375-.375M15.375 6.753a.375.375 0 11-.375.375.375.375 0 01.375-.375M7.359 3.682L5.25.753M16.641 3.682L18.75.753M3.75 11.253a3 3 0 00-3 3v6M20.25 11.253a3 3 0 013 3v6"
    />
  );

export default SvgAndroid1;
