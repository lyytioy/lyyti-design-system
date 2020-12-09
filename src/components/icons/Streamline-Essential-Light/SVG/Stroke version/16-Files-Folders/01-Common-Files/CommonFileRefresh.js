import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-refresh_svg__a"
      d="M20 17.495h3.5v-3.5M17.5 23.494a5.5 5.5 0 115.475-6"
    />,
    <path
      className="common-file-refresh_svg__a"
      d="M23.5 13.994v3.5l-3.5.001M10.5 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />
  );

export default SvgCommonFileRefresh;
