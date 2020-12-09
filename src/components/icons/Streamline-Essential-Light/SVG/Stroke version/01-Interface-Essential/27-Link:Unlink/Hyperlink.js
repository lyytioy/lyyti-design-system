import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHyperlink = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hyperlink_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hyperlink_svg__a"
      d="M13.5 14a2 2 0 002 2h5a3.008 3.008 0 003-3v-2a3.009 3.009 0 00-3-3h-5a2 2 0 00-2 2M10.5 14a2 2 0 01-2 2h-5a3.008 3.008 0 01-3-3v-2a3.009 3.009 0 013-3h5a2 2 0 012 2M6.5 11.999h11"
    />
  );

export default SvgHyperlink;
