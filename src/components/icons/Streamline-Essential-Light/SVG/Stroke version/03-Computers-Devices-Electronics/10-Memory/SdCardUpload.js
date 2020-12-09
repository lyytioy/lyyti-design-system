import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCardUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="sd-card-upload_svg__a"
      d="M17.5 8.917v-3a1 1 0 00-.292-.707L12.794.793A1 1 0 0012.087.5H1.5a1 1 0 00-1 1v8h1v3h-1v10a1 1 0 001 1h8.458M4.501 3.5v5M7.501 3.5v5M10.501 3.5v5M13.501 5.5v4"
    />,
    <circle className="sd-card-upload_svg__a" cx={17.499} cy={17.5} r={6} />,
    <path
      className="sd-card-upload_svg__a"
      d="M17.499 20.5v-6M17.499 14.5l-2.25 2.25M17.499 14.5l2.25 2.25"
    />
  );

export default SvgSdCardUpload;
