import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAndroidUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".android-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="android-upload_svg__a"
      d="M2.5 20v-8.5A1.326 1.326 0 014 10h1.5M21.5 20v-8.5A1.326 1.326 0 0020 10h-1.5M10.98 3.076L9.037 1.004M13.032 3.076l1.943-2.072M17.833 8a.5.5 0 00.472-.666A6.541 6.541 0 0012.006 3a6.537 6.537 0 00-6.315 4.34.5.5 0 00.473.66zM14.5 20h3a1 1 0 001-1v-9h-13v9a1 1 0 001 1h3"
    />,
    <path
      className="android-upload_svg__a"
      d="M10.25 5.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.75 5.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M12 15.504v8M10 17.504l2-2 2 2"
    />
  );

export default SvgAndroidUpload;
