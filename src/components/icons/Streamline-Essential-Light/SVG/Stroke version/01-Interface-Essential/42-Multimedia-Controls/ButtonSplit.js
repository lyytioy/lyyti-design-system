import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonSplit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-split_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="button-split_svg__a" d="M23.5 6H18c-5 0-4 6-9 6H.5" />,
    <path
      className="button-split_svg__a"
      d="M21.5 2.999l2 3-2 3M23.5 18H18c-5 0-4-6-9-6"
    />,
    <path className="button-split_svg__a" d="M21.5 20.999l2-3-2-3" />
  );

export default SvgButtonSplit;
