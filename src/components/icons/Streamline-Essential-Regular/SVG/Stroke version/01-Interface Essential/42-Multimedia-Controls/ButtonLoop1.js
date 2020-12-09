import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonLoop1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-loop-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-loop-1_svg__a"
      d="M12 12.5s2.25 5.25 6 5.25a5.25 5.25 0 000-10.5c-3.75-.002-6 5.25-6 5.25zM12 12.5s-2.25 5.25-6 5.25a5.25 5.25 0 010-10.5c3.75-.002 6 5.25 6 5.25z"
    />
  );

export default SvgButtonLoop1;
