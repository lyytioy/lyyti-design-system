import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorChoose1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-choose-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-choose-1_svg__a"
      d="M18.5 23.5v-7.1a2.888 2.888 0 00-2.747-2.9H12.5V8a1.5 1.5 0 10-3 0v8.5l-1.159-1.449a1.54 1.54 0 00-2.509 1.779L10 23.5M7.5.499l-5 7-2-2M16.5.499l7 7M23.5.499l-7 7"
    />
  );

export default SvgCursorChoose1;
