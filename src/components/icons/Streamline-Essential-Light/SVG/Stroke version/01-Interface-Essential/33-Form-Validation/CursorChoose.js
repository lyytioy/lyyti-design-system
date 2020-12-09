import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorChoose = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-choose_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-choose_svg__a"
      d="M8.91 23.5l-4.016-6.015c-.454-.7-.455-2.009.545-2.009s2.061.411 4.061 3.493V7.982A1.49 1.49 0 0110.992 6.5 1.507 1.507 0 0112.5 8v5.97l4.447 1.5c.988.317 1.207 1.5.974 2.516L16.894 23.5M7.5.499l-5 7-2-2M16.5.499l7 7M23.5.499l-7 7"
    />
  );

export default SvgCursorChoose;
