import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="button-refresh_svg__a"
      d="M2 7.499h4M11 7.5h6.5a1 1 0 011 1V14"
    />,
    <path className="button-refresh_svg__a" d="M22 16.5H9.5a1 1 0 01-1-1V.5" />,
    <path
      className="button-refresh_svg__a"
      d="M4.5 4.499l4-4 4 4M22.5 19.499l-4 4-4-4M18.5 23.499v-4.5"
    />
  );

export default SvgButtonRefresh;
