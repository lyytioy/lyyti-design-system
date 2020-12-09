import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-warning_svg__a"
      d="M12.5 14.543V1.957a1 1 0 00-1.707-.707L5.5 6.543H2a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3.5l5 5M17.5 19.543a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 17.543v-3"
    />,
    <path
      className="volume-control-warning_svg__a"
      d="M18.338 11.546a.95.95 0 00-1.676 0l-5.056 9.635a.923.923 0 00.031.914.948.948 0 00.807.448h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914zM15.5 9.543a3 3 0 00-3-3M12.5 12.543a3 3 0 001.264-.278"
    />
  );

export default SvgVolumeControlWarning;
