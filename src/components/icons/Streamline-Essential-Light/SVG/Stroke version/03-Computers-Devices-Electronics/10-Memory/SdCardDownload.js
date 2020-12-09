import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCardDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="sd-card-download_svg__a"
      d="M17.5 8.917v-3a1 1 0 00-.293-.707L12.794.793A1 1 0 0012.087.5H1.5a1 1 0 00-1 1v8h1v3h-1v10a1 1 0 001 1h8.458M4.502 3.5v5M7.502 3.5v5M10.502 3.5v5M13.502 5.5v4"
    />,
    <circle className="sd-card-download_svg__a" cx={17.498} cy={17.5} r={6} />,
    <path
      className="sd-card-download_svg__a"
      d="M17.498 14.5v6M17.498 20.5l-2.25-2.25M17.498 20.5l2.25-2.25"
    />
  );

export default SvgSdCardDownload;
