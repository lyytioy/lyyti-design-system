import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalNo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-no_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="signal-no_svg__a"
      d="M18.751 14.25h4.5M9.751 14.25h4.5M.751 14.25h4.5"
    />
  );

export default SvgSignalNo;
