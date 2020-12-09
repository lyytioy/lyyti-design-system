import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonRefreshOne = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-refresh-one_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="button-refresh-one_svg__a"
      d="M9.53 10.48l2.97-2.856v8.875"
    />,
    <path
      className="button-refresh-one_svg__a"
      d="M21.5 11.5v-6a1 1 0 00-1-1H.5"
    />,
    <path
      className="button-refresh-one_svg__a"
      d="M4.5 8.499l-4-4 4-4M2.5 12.5v6a1 1 0 001 1h20"
    />,
    <path className="button-refresh-one_svg__a" d="M19.5 15.499l4 4-4 4" />
  );

export default SvgButtonRefreshOne;
