import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileDash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-dash_svg__a,.common-file-dash_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}.common-file-dash_svg__b{fill-rule:evenodd}"
        }
      </style>
    </defs>,
    <path
      className="common-file-dash_svg__a"
      d="M3 17v2M3 13v2M3 9v2M21 17v2M21 13v2M21 9v2M3 5v2M7 1h2M11 1h2M7 23h2M11 23h2M15 23h2"
    />,
    <path
      className="common-file-dash_svg__b"
      d="M3 21v1a1 1 0 001 1h1M21 21v1a1 1 0 01-1 1h-1M3 3V2a1 1 0 011-1h1"
    />,
    <path
      className="common-file-dash_svg__a"
      d="M15 1h1l.5.5M20.5 5.5l.5.5v1.25M18.02 3L19 4.003"
    />
  );

export default SvgCommonFileDash;
