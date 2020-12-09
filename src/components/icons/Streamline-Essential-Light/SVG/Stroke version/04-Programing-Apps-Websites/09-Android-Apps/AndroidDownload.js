import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAndroidDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".android-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="android-download_svg__a"
      d="M2.5 19.5V11A1.326 1.326 0 014 9.5h1.5M21.5 19.5V11A1.326 1.326 0 0020 9.5h-1.5M10.98 2.576L9.037.504M13.032 2.576L14.975.504M17.833 7.5a.5.5 0 00.472-.666 6.541 6.541 0 00-6.3-4.334 6.537 6.537 0 00-6.314 4.34.5.5 0 00.473.664zM14.5 19.5h3a1 1 0 001-1v-9h-13v9a1 1 0 001 1h3"
    />,
    <path
      className="android-download_svg__a"
      d="M10.25 5a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.75 5a.25.25 0 11-.25.25.25.25 0 01.25-.25M11.999 23.504v-8M13.999 21.504l-2 2-2-2"
    />
  );

export default SvgAndroidDownload;
