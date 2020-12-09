import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAndroidDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".android-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="android-download_svg__a"
      d="M9.75 11.253h-6v10.5a1.5 1.5 0 001.5 1.5h4.5M19.94 8.257A8.251 8.251 0 003.75 10.5v.75"
    />,
    <path
      className="android-download_svg__a"
      d="M8.625 6.753a.375.375 0 11-.375.375.375.375 0 01.375-.375M15.375 6.753a.375.375 0 11-.375.375.375.375 0 01.375-.375M7.359 3.682L5.25.753M16.641 3.682L18.75.753M3.75 11.253a3 3 0 00-3 3v6"
    />,
    <circle className="android-download_svg__a" cx={17.25} cy={17.253} r={6} />,
    <path
      className="android-download_svg__a"
      d="M17.25 14.253v6M17.25 20.253L15 18.003M17.25 20.253l2.25-2.25"
    />
  );

export default SvgAndroidDownload;
