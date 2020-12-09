import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileTextRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-text-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-text-refresh_svg__a"
      d="M4.5 8.5H14M4.5 11.5h6M4.5 5.5h7M4.5 14.5h4M4.5 17.5h4M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V9.5M20 17.495h3.5v-3.5M17.5 23.494a5.5 5.5 0 115.475-6"
    />,
    <path
      className="common-file-text-refresh_svg__a"
      d="M23.5 13.994v3.5l-3.5.001"
    />
  );

export default SvgCommonFileTextRefresh;
