import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonLoop1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-loop-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="button-loop-1_svg__a"
      d="M6.1 7.5c-3.029 0-5.068 2.013-5.068 4.5s2.039 4.5 5.068 4.5S12 12 12 12 9.129 7.5 6.1 7.5zM18.016 7.5c-3.029 0-5.984 4.5-5.984 4.5s2.955 4.5 5.984 4.5S23 14.483 23 12s-1.954-4.5-4.984-4.5z"
    />
  );

export default SvgButtonLoop1;
