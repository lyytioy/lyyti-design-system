import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandVerticalLeftRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-vertical-left-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-vertical-left-right_svg__a"
      d="M23.5 14.499H.5M23.5 10.499H.5M11.5 23.499v-9M11.5 10.499v-9.5M8.5 20.499l3 3 3-3M8.5 3.499l3-3 3 3"
    />
  );

export default SvgExpandVerticalLeftRight;
