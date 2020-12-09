import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandVertical4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-vertical-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-vertical-4_svg__a"
      d="M14.5 6.499l-3-3-3 3M11.5 20.499v-17M14.5 17.499l-3 3-3-3M5.5 23.499h13M5.5.499h13"
    />
  );

export default SvgExpandVertical4;
