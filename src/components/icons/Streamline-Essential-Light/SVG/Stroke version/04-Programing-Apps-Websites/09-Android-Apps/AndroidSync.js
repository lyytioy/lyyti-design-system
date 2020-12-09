import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAndroidSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".android-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="android-sync_svg__a"
      d="M10.906 3.504l-1.875-2M13.094 3.504l1.875-2M17.827 8.5a.5.5 0 00.472-.666A6.541 6.541 0 0012 3.5a6.537 6.537 0 00-6.315 4.34.5.5 0 00.473.664zM2.5 20v-8A1.326 1.326 0 014 10.5h1.5M21.5 20v-8a1.326 1.326 0 00-1.5-1.5h-1.5M18.5 20.004v-9.5h-13v9.5M10.5 20.004H8v2.5M15.612 20.493A3.715 3.715 0 018.452 20"
    />,
    <path
      className="android-sync_svg__a"
      d="M13.5 18.004H16v-2.5M8.389 17.515a3.715 3.715 0 017.16.489M10.25 6a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.75 6a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgAndroidSync;
